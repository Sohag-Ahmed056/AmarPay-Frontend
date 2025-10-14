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

---

## 📁 Project Structure

### Frontend

amar-pay-frontend/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/           # Static assets like images, icons, and logos
│   ├── components/       # Reusable UI components (Buttons, Cards, Inputs, etc.)
│   ├── config/           # Configuration files (e.g., API base URLs, env settings)
│   ├── constants/        # Constant variables and enums
│   ├── data/             # Static data, mock data, or seed content
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Page layout components (DashboardLayout, AuthLayout, etc.)
│   ├── lib/              # Utility libraries and third-party helpers
│   ├── modules/          # Feature-based modules (Auth, Payments, Users, etc.)
│   ├── pages/            # Route-based page components
│   ├── providers/        # Context providers (ThemeProvider, AuthProvider, etc.)
│   ├── redux/            # Redux Toolkit store and feature slices
│   ├── routes/           # Application route definitions and private/public routes
│   ├── types/            # TypeScript type definitions and interfaces
│   ├── utils/            # Helper functions (formatters, validators, etc.)
│   │
│   ├── App.css
│   ├── App.tsx           # Main app component
│   ├── index.css
│   ├── main.tsx          # Entry point rendering the root app
│   └── vite-env.d.ts     # Vite environment type declarations
│
├── .gitignore
├── README.md
├── bun.lock              # (if using Bun as package manager)
├── components.json       # shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── package-lock.json     # NPM lock file
├── tsconfig.app.json     # TypeScript config for app files
├── tsconfig.json         # Root TypeScript configuration
└── tsconfig.node.json    # Node environment TypeScript configuration

## Clone Repository:
https://github.com/Sohag-Ahmed056/AmarPay-Frontend.git
## RUN COMMAND:
bun install
bun run dev


