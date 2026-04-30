# 🚀 FileServer — Cross-Platform File Management System

A **production-level file server** with CLI and Desktop GUI, supporting secure file upload, download, sharing, and management across platforms.

Built with a focus on **system design, DevOps, and real-world usability**.

---

# 📌 Overview

FileServer is a **cross-platform file management system** that allows authenticated users to:

* Upload, download, and manage files
* Share files using secure links
* Preview files (images & PDFs)
* Use both CLI and Desktop GUI
* Access from anywhere via cloud deployment

The project demonstrates **full-stack development + DevOps + desktop application engineering**.

---

# ✨ Features

## 🔐 Authentication

* User signup & login
* JWT-based authentication
* Secure API access

## 📂 File Management

* Upload files (drag & drop supported)
* Download files
* Delete files
* View file list

## 🔗 File Sharing

* Generate secure shareable links
* Public access via token-based URLs
* Copy-to-clipboard support

## 👁️ File Preview

* Image preview (JPG, PNG, etc.)
* PDF preview inside app
* Modal-based viewer

## 🔍 Search & Filtering

* Real-time file search
* Quick access to files

## 💻 CLI Tool

* Login / Signup
* Upload / Download / Delete
* Share links
* Table-based output

## 🖥️ Desktop App

* Built with Electron + React
* Cross-platform (Linux, Windows)
* Drag & drop UI
* Modern UX with notifications

## ⚙️ DevOps & Deployment

* Dockerized backend
* CI/CD using Jenkins
* Cloud deployment on Azure
* DockerHub image hosting

---

# 🏗️ Tech Stack

## 🔹 Backend

* Node.js
* Express.js
* Sequelize ORM
* MySQL / PostgreSQL

## 🔹 Frontend (GUI)

* React.js
* Electron
* Axios

## 🔹 CLI

* Node.js
* Commander.js

## 🔹 DevOps

* Docker
* Jenkins
* Microsoft Azure

---

# 📁 Project Structure

```
file-server/
├── server/        # Backend (API)
├── cli/           # CLI Tool
├── gui/           # Desktop App (Electron + React)
├── docker/        # Docker configs
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/file-server.git
cd file-server
```

---

## 2️⃣ Backend Setup

```
cd server
npm install
npm start
```

---

## 3️⃣ Run with Docker

```
docker build -t file-server .
docker run -d -p 5000:5000 file-server
```

---

## 4️⃣ CLI Setup

```
cd cli
npm install
npm link
```

Run:

```
fileserver login <username> <password>
```

---

## 5️⃣ GUI (Development)

```
cd gui
npm install
npm run dev
```

---

## 6️⃣ GUI (Production Build)

```
npm run dist
```

Output:

```
gui/dist/FileServer.AppImage
gui/dist/FileServer Setup.exe
```

---

# 🐧 Running Desktop App (Linux)

```
chmod +x FileServer.AppImage
./FileServer.AppImage
```

⚠️ Note:
Linux users may need:

```
sudo apt install libfuse2
```

---

# ☁️ Deployment

## 🔹 Cloud Platform

* Deployed on Microsoft Azure

## 🔹 DockerHub

```
docker pull yourusername/file-server
```

## 🔹 Run Anywhere

```
docker run -d -p 5000:5000 yourusername/file-server
```

---

# 🔗 API Base URL

```
https://your-azure-url/api
```

---

# 🧪 Demo Flow

1. Signup / Login
2. Upload file
3. Preview file
4. Generate share link
5. Download file
6. Use desktop app

---

# 📸 Screenshots

*Add screenshots here*

---

# 🎥 Demo Video

*Add demo video link here*

---

# 💡 Key Highlights

* Full-stack system (Backend + CLI + GUI)
* Desktop application using Electron
* CI/CD pipeline with Jenkins
* Containerized using Docker
* Cloud deployment on Azure
* Real-world file sharing system

---

# 🚀 Future Enhancements

* File versioning (like Google Drive)
* End-to-end encryption
* Multi-user collaboration
* Storage analytics dashboard
* AI-based image search

---

# 👨‍💻 Author

**Your Name**

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
