provider "aws" {
  region = "eu-north-1"
}

# Use existing VPC
data "aws_vpc" "dream_vpc" {
  id = "vpc-029bc92131c3983ce"
}

# Use existing Subnet
data "aws_subnet" "dream_subnet" {
  id = "subnet-001726d0aa3c620f5"
}

# Security Group
resource "aws_security_group" "dream_sg" {
  name        = "dream-sg"
  description = "Allow SSH, HTTP, and Docker app ports"
  vpc_id      = data.aws_vpc.dream_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "dream-sg"
  }
}

# Ubuntu AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

# EC2 Instance
resource "aws_instance" "dream_ec2" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = data.aws_subnet.dream_subnet.id
  vpc_security_group_ids = [aws_security_group.dream_sg.id]
  key_name               = "dream-fix-key" 

  tags = {
    Name = "dream-ec2"
  }

  user_data = <<-EOT
              #!/bin/bash
              apt-get update -y
              apt-get install -y docker.io docker-compose awscli unzip
              systemctl start docker
              systemctl enable docker

              # Pull your Docker images (replace with your Docker Hub images)
              mkdir -p /home/ubuntu/dream-vacation
              cd /home/ubuntu/dream-vacation
              curl -O https://raw.githubusercontent.com/<YOUR_GITHUB_USERNAME>/dream-vacation-app/main/docker-compose.yml
              docker-compose up -d

              # Install CloudWatch Agent
              curl https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb -O
              dpkg -i -E ./amazon-cloudwatch-agent.deb
              /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -c default -s
              EOT
}

# CloudWatch Alarm
resource "aws_cloudwatch_metric_alarm" "cpu_alarm" {
  alarm_name          = "dream-ec2-high-cpu"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 60
  statistic           = "Average"
  threshold           = 70
  alarm_description   = "This metric monitors EC2 CPU usage"
  actions_enabled     = false
}

# Outputs
output "vpc_id" {
  description = "The ID of the VPC"
  value       = data.aws_vpc.dream_vpc.id
}

output "subnet_id" {
  description = "The ID of the subnet"
  value       = data.aws_subnet.dream_subnet.id
}

output "security_group_id" {
  description = "The ID of the security group"
  value       = aws_security_group.dream_sg.id
}

output "ec2_public_ip" {
  description = "The public IP of the EC2 instance"
  value       = aws_instance.dream_ec2.public_ip
}

output "ec2_public_dns" {
  description = "The public DNS of the EC2 instance"
  value       = aws_instance.dream_ec2.public_dns
}
