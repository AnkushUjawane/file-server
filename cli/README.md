# FileServer CLI

A powerful command-line tool to interact with the FileServer backend.
Upload, download, manage, and share files directly from your terminal.

---

## Installation

```bash
npm install -g fileserver-cli
```

---

## Initial Setup

```bash
fileserver init
```

This will configure your CLI with the backend server.

---

## Authentication

### Login

```bash
fileserver login <username> <password>
```

### Logout

```bash
fileserver logout
```

---

## File Operations

### 📤 Upload File

```bash
fileserver upload <file-path>
```

### Download File

```bash
fileserver download <fileId>
```

### List Files

```bash
fileserver list
```

### Delete File

```bash
fileserver delete <fileId>
```

---

## Share Files

Generate a shareable link:

```bash
fileserver share <fileId>
```

---

## Preview File

```bash
fileserver preview <fileId>
```

---

## User Info

```bash
fileserver whoami
```

---

## Configuration

View config:

```bash
fileserver config
```

---

## Features

* 🔐 Secure authentication
* 📤 Upload & download files
* 🔗 Share files via links
* ⚡ Fast CLI-based operations
* 🧩 Modular command system
* 🌐 Works with cloud backend

---

## Tech Stack

* Node.js
* Commander.js
* Axios
* Chalk
* Ora

---

## Backend

This CLI connects to a cloud-hosted backend deployed on Microsoft Azure.

---

## Example Workflow

```bash
fileserver init
fileserver login ankush 123456
fileserver upload test.txt
fileserver list
fileserver share 123
```

---

## Troubleshooting

### Command not found

Reinstall globally:

```bash
npm install -g fileserver-cli
```

---

### API errors

Ensure backend is running and configured correctly.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Ankush Ujawane

---

## ⭐ Support

If you like this project, give it a star on GitHub!
