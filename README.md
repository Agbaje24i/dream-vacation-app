# Dream Vacation App – AWS Deployment 🚀

This project demonstrates deploying the **Dream Vacation App** on **AWS EC2** using a custom **VPC**, **subnet**, and a **CI/CD pipeline**.

## Part 1 – Networking Setup 🌐

- **VPC Name:** dream-vpc 
- **CIDR Block:** 10.0.0.0/16  
- **Subnet Name:** dream-subnet 
- **CIDR Block:** 10.0.1.0/24  
- **Internet Gateway:** dream-igw  
- **Route Table:** dream-rt (associated with VPC)  

📸 **Screenshot – VPC and Subnet**
Aws images vpc.png
Aws images subnet2.png

## Part 2 – EC2 Instance Setup 💻

- **AMI:** Ubuntu  
- **Instance Type:** t2.micro  
- **User Data Script:** installs Docker & Docker Compose  

📸 **EC2 Instance**
Aws images EC2.png
Aws images Ubuntu1.png
Aws images Ubuntu2.png
Aws images Ubuntu3.png
Aws images Ubuntu4.png
Aws images Ubuntu5.png

## Part 3 – CI/CD Deployment ⚙️

- GitHub Actions pipeline builds and deploys Docker containers  
- Deployment target: EC2 instance  
- Runs using docker-compose`  

## Part 4 – Application Running 🎉

- The Dream Vacation App is successfully running on the EC2 public IP.  

📸 **Screenshot – App in Browser**
Awsimages dreamapp1.png
Awsimages dreamapp2.png
Awsimages dreamapp3.png


## Deliverables ✅

Aws images vpc.png
Aws images subnet2.png
Aws images EC2.png
Awsimages dreamapp1.png
Awsimages dreamapp2.png
Awsimages dreamapp3.png
Awsimages igw.png
Awsimages Rt.png

     

All screenshots are available in the Aws images folder.
