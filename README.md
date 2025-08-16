# Dream Vacation App – Azure Deployment

This project deploys the **Dream Vacation App** to Azure Virtual Machine (VM) with networking setup and CI/CD pipeline integration.

---

## Part 1 – Networking Setup (Azure)
- Created **Virtual Network**: `dream-vnet`
- Created **Subnet**: `dream-subnet`
- Created **Network Security Group**: `dream-nsg`
- Allowed inbound ports: `22 (SSH)`, `80 (HTTP)`, `3000 (Frontend)`.

📸 Azure image:  
![Dream VNet](./screenshots/dream%20vnet.png)

---

## Part 2 – VM Setup
- Launched Ubuntu VM (`dream-vm`)
- Installed Node.js, NPM, Docker & Docker Compose
- Configured Security Group to allow access

📸 Azure image:  
![Deploy VM](./screenshots/deploy%20vm.png)  
![Dream VM](./screenshots/dream%20vm.png)

---

## Part 3 – Deployment
- Built frontend with `npm run build`
- Served frontend using `serve -s build`
- Connected backend on port 5000
- Verified app works on VM Public IP (`http://<your-public-ip>:3000`)

📸 Azure image:  
![App in Browser 1](./screenshots/app%20in%20browser1.png)  
![App in Browser 2](./screenshots/app%20in%20browser2.png)  
![App in Browser 3](./screenshots/app%20in%20browser3.png)

---

## Part 4 – CI/CD Pipeline
- GitHub Actions pipeline builds & pushes Docker image
- SSH into VM, copies files, runs Docker Compose
- Auto-deploys the latest version

📸 Azure image:  
*(Add your pipeline logs screenshot here if available)*

---

## Deliverables
✅ VPC + Subnet Screenshot  
✅ VM Screenshots  
✅ App Running Screenshots  
✅ CI/CD Logs Screenshot
# 🌴 Dream Vacation App 🛫

Welcome to the Dream Vacation App! This is a responsive full-stack web app where users can explore dream destinations, view vacation packages, and make bookings easily.

## ✨ Features

- Beautiful landing page with background image
- Navigation: Home, Destinations, Bookings
- Popular Vacation Packages with images and descriptions
- Responsive design using Tailwind CSS
- React frontend connected to a Node.js/Express backend with PostgreSQL

## 📸 Azure image

_Add screenshots after deployment._

## 🔧 Tech Stack

- React
- Tailwind CSS
- Node.js / Express
- PostgreSQL
- Docker (for backend)

## 📦 Installation

bash
# Clone the repository
git clone https://github.com/Agbaje24i/dream-vacation-app.git

# Go into the frontend directory
cd dream-vacation-app/frontend

# Install dependencies
npm install

# Start the frontend
npm start

🤝 Contact
Email: adekunleisaac1989@gmail.com

Phone: +2348142723736
Triggered CI/CD
final trigger
