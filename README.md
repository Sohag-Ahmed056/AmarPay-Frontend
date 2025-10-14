# 💳 AmarPay — Modern Online Payment Platform

AmarPay is a secure and modern online payment solution built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It enables users to make transactions, manage their wallets, and track payment histories — with role-based admin access and JWT authentication.

---

## 🚀 Live Demo

🔗 **Frontend:** [https://amar-pay-frontend.vercel.app](https://amar-pay-frontend.vercel.app)  
🔗 **Backend API:** [https://amar-pay-backend-api.vercel.app](https://amar-pay-backend-api.vercel.app)

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Environment Variables](#️-environment-variables)
6. [Setup Instructions](#️-setup-instructions)
7. [API Overview](#-api-overview)
8. [Deployment](#-deployment)
9. [License](#-license)

---

## 🧭 Overview

AmarPay allows users to:
- Register, log in, and manage profiles.
- Send and receive payments securely.
- View transaction history.
- Admins can manage users and monitor the system.

Built with industry-standard authentication, modular backend design, and a clean, responsive frontend UI.

---

## ✨ Features

### 👤 User
- Register and log in using JWT authentication.
- Update personal information and view profile.
- Send, receive, and view payment transactions.
- Check balance and wallet activity in real time.

### 🛠️ Admin
- Role-based access (admin / user).
- Manage users and transactions.
- Dashboard with analytics and reports.

### 💡 Other Features
- Secure password hashing with **bcrypt**.
- Token-based authentication with **JWT**.
- Global error handling middleware.
- Axios interceptors with automatic token refresh.
- Responsive UI built with **shadcn/ui** + **TailwindCSS**.

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, TypeScript, Redux Toolkit Query, TailwindCSS, shadcn/ui |
| **Backend** | Node.js, Express.js, TypeScript, Mongoose |
| **Database** | MongoDB (Mongoose ORM) |
| **Auth** | JWT (Access + Refresh Tokens), bcrypt |
| **Deployment** | Vercel (Frontend + Backend), MongoDB Atlas |
| **Others** | Zod (Validation), Axios, Passport.js |


## 📁 Project Structure

Here's an overview of the project's directory structure, designed for scalability and maintainability.

```
amar-pay-frontend/
│
├── public/
│
├── src/
│   ├── assets/           # Images, icons, and static resources
│   ├── components/       # Reusable UI components (buttons, cards, modals, etc.)
│   ├── config/           # Global configuration files (API URLs, environment setup)
│   ├── constants/        # Constant values and enums
│   ├── data/             # Static or mock data
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout components (DashboardLayout, AuthLayout, etc.)
│   ├── lib/              # Shared libraries or helper functions
│   ├── modules/          # Feature-based modules (Auth, Payment, User, etc.)
│   ├── pages/            # Route-level pages
│   ├── providers/        # Context or theme providers
│   ├── redux/            # Redux store setup and slices (RTK Query, etc.)
│   ├── routes/           # Application routes and protected route logic
│   ├── types/            # TypeScript type definitions and interfaces
│   ├── utils/            # Utility functions (formatters, validators, etc.)
│   │
│   ├── App.css
│   ├── App.tsx           # Root app component
│   ├── index.css
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment type declarations
│
├── .gitignore
├── README.md
├── bun.lock              # Bun package manager lockfile (if used)
├── components.json       # shadcn/ui configuration file
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML template
├── package-lock.json
├── package.json          # Project metadata and dependencies
├── tsconfig.app.json     # TypeScript configuration for app
├── tsconfig.json         # Root TypeScript config
└── tsconfig.node.json    # Node-specific TypeScript config
```
## Clone Repository:
https://github.com/Sohag-Ahmed056/AmarPay-Frontend.git


-----

## 🚀 Getting Started

Follow these steps to get the development environment running on your local machine.

### 1\. Install Dependencies

First, open your terminal in the project's root directory. Run the following command to install all the required packages using **Bun**.

```bash
bun install
```

### 2\. Run the Development Server

After the installation is complete, use this command to start the local development server. 

```bash
bun run dev
```


