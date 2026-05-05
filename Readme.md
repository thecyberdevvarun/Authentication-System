# 🔐 Complete Authentication System

### JWT, Refresh Token, OTP, Logout All Devices

A production-ready authentication system built using Node.js, Express.js, MongoDB, and JWT while learning real-world backend authentication architecture.

This project focuses on industry-level authentication concepts including Access Tokens, Refresh Tokens, Token Rotation, Session Management, OTP Verification, and Logout From All Devices.

---

# 🚀 Features

* ✅ User Registration & Login
* ✅ JWT Authentication
* ✅ Access Token & Refresh Token Flow
* ✅ Refresh Token Rotation
* ✅ Session Management System
* ✅ Logout System
* ✅ Logout From All Devices
* ✅ OTP Based Authentication
* ✅ Protected Routes
* ✅ Authentication Middleware
* ✅ Secure Password Hashing
* ✅ MongoDB Database Integration
* ✅ Production-Level Auth Flow

---

# 🧠 What I Learned

* Authentication vs Authorization
* How JWT Works
* Access Token & Refresh Token Architecture
* Secure Session Management
* Token Rotation Strategy
* Logout & Session Invalidation
* OTP Authentication Flow
* Protecting Backend APIs
* Real-World Authentication Design

---

# 🛠 Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication & Security

* JWT
* bcrypt

---

# 📂 Folder Structure

```bash
project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
├── utils/
├── config/
├── database/
├── .env
├── server.js
└── package.json
```

---

# ⚙️ Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Move into project folder
cd authentication-system

# Install dependencies
npm install

# Run development server
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
```

---

# 🔄 Authentication Flow

## Login Flow

```text
User Login
   ↓
Generate Access Token
   ↓
Generate Refresh Token
   ↓
Store Session
   ↓
Send Tokens to Client
```

---

## Refresh Token Flow

```text
Access Token Expires
   ↓
Client Sends Refresh Token
   ↓
Verify Refresh Token
   ↓
Rotate Refresh Token
   ↓
Generate New Access Token
```

---

## Logout Flow

```text
User Logout
   ↓
Invalidate Session
   ↓
Blacklist Token
```

---

## Logout From All Devices

```text
User Requests Logout From All Devices
   ↓
Delete All Active Sessions
   ↓
Invalidate All Tokens
```

---

# 🛡️ Security Features

* Password hashing using bcrypt
* Short-lived access tokens
* Refresh token rotation
* Session-based authentication handling
* Secure logout mechanism
* OTP verification support
* Protected routes middleware
* Token invalidation system

---

# 🎥 Tutorial Reference

This project was built while learning from the authentication system tutorial by
Ankur Prajapati.

### 📺 Tutorial Topics Covered

* Authentication Architecture
* User Registration & MongoDB Setup
* Identifying Users from Requests
* Access Token & Refresh Token Flow
* Refresh Token Rotation
* Session Management
* Logout & Logout From All Devices
* OTP Based Authentication

---

# ⏱️ Project Timeline

```text
00:00:00 – Introduction
00:00:50 – What is Authentication
00:04:09 – How Authentication System Works
00:14:13 – Registering User & MongoDB Database Setup
00:48:13 – Identifying User from Request
01:01:20 – Access Token & Refresh Token Working
01:16:24 – Implementing Token Rotation
01:31:16 – Session Management & Logout System
02:07:39 – OTP Authentication Working
02:13:23 – OTP Authentication Implementation
02:42:40 – Outro
```

---

# 📚 Future Improvements

* Google OAuth Login
* GitHub OAuth
* Password Reset System
* Email Verification
* Two Factor Authentication (2FA)
* Redis Session Storage
* Device Tracking
* Role Based Access Control (RBAC)

---

# 🤝 Contributing

Contributions and suggestions are welcome.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 👨‍💻 Author

Built while learning backend authentication, security, and real-world session management systems.
