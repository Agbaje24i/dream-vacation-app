Dream Vacation App Deployment

roject Overview
The Dream Vacation App is a full-stack web application that allows users to explore dream destinations, view vacation packages, and make bookings. This project demonstrates automated deployment to AWS EC2 using Terraform and a CI/CD pipeline, along with CloudWatch monitoring.

 Architecture
- VPC:dream-vpc (10.0.0.0/16)  
- Subnet:dream-subnet (10.0.1.0/24)  
- Internet Gateway: dream-igw  
- security Group: dream-sg (SSH: 22, HTTP: 80)  
- EC2 Instance: Ubuntu LTS, Docker & Docker Compose installed  
- CloudWatch Alarm: Monitors CPU utilization >70%  




Part 1 – Networking Setup (Terraform)
Terraform provisions:
- VPC, subnet, internet gateway
- Route table and subnet association
- Security group allowing SSH and HTTP

Terraform Snippet:
resource "aws_vpc" "dream_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "dream-vpc" }
}

resource "aws_subnet" "dream_subnet" {
  vpc_id     = aws_vpc.dream_vpc.id
  cidr_block = "10.0.1.0/24"
  tags = { Name = "dream-subnet" }
}
