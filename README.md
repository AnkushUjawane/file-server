# 📂 File Server System

A cross-platform GUI-based file server that allows authenticated users to securely upload, download, and manage files over a network.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based)
* 📤 File Upload
* 📥 File Download
* 📄 File Listing
* 🗑️ Delete Files
* ✏️ Rename Files
* 👥 Multi-user Support
* 🖥️ Cross-platform GUI (Electron + React)

---

## 🏗️ Architecture

```
Client (Electron + React)
        ↓
 REST API (Node.js + Express)
        ↓
 File System + Database
```

---

## 📁 Project Structure

```
file-server/
 ├── server/       # Backend
 ├── client/       # Desktop GUI
 ├── docs/         # Documentation
```

---

## ⚙️ Tech Stack

### Backend

* Node.js
* Express.js
* Multer (file upload)
* JWT Authentication

### Frontend

* React.js
* Electron

### Storage

* Local File System (initial)
* Cloud (future scope)

---

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/file-server.git
cd file-server
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm start
```

---

### 3. Setup Client

```bash
cd client
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Files

* `POST /api/files/upload`
* `GET /api/files`
* `GET /api/files/:id/download`
* `DELETE /api/files/:id`
* `PUT /api/files/:id`

---

## 🔐 Security

* Password hashing using bcrypt
* JWT authentication
* File access control
* Input validation

---

## 📌 Future Enhancements

* ☁️ Cloud Storage (AWS S3)
* 🔄 Resume Uploads
* 🔒 End-to-End Encryption
* 📊 Admin Dashboard
* 📡 Real-time updates (WebSocket)

---

## 🤝 Contribution

Pull requests are welcome. Please follow project structure and coding rules.

---

## 📄 License

MIT License
