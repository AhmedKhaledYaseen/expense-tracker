# 💳 Team Expense Tracker (MERN Stack)

[![React 19](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646C99?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Material UI](https://img.shields.io/badge/MUI-v7-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Services_Multi--Service-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A production-ready, full-stack **MERN** (MongoDB, Express 5, React 19, Node.js) team expense tracking and financial auditing system. Designed for both individual employees and finance administrators with role-based access control (RBAC), approval workflows, interactive visual analytics, immutable audit logs, CSV exports, and localized Egyptian Pound (`E£` / `EGP`) currency support.

Configured with **Vercel Services** for unified monorepo deployment under a single domain.

---

## 📑 Table of Contents

- [Live Deployments](#-live-deployments)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [REST API Reference](#-rest-api-reference)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Unified Quick Start (One Command)](#unified-quick-start-recommended)
  - [Manual Setup (Separate Terminals)](#manual-setup)
- [Environment Variables](#-environment-variables)
- [Deployment on Vercel](#-deployment-on-vercel)
- [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
- [Author & Contact](#-author--contact)

---

## 🌐 Live Deployments

| Resource | Link |
| :--- | :--- |
| **Unified Application (Vercel)** | [expense-tracker-one-ivory-14.vercel.app](https://expense-tracker-one-ivory-14.vercel.app/) |
| **Frontend Mirror** | [expense-tracker-frontend-87.vercel.app](https://expense-tracker-frontend-87.vercel.app/) |
| **Backend API Mirror** | [expense-tracker-backend-87.vercel.app](https://expense-tracker-backend-87.vercel.app/) |
| **GitHub Repository** | [github.com/AhmedKhaledYaseen/expense-tracker](https://github.com/AhmedKhaledYaseen/expense-tracker) |

---

## ✨ Key Features

### 👤 Employee / User Workspace
- **Secure Authentication**: Register and log in with JWT tokens and salted passwords (`bcryptjs`).
- **Expense Submission**: Submit expenses with title, description, category (Food, Travel, Equipment, Utilities, etc.), amount (in `E£` / `EGP`), and date.
- **Personal Dashboard**: Track submitted expenses, view personal monthly spending summaries, and inspect live approval statuses (`pending`, `approved`, `rejected`).
- **Filtering & Search**: Quickly filter personal expense history by category and date ranges.

### 🛡️ Admin Management & Finance Control
- **Unified Admin Portal**: Centralized console to review all expenses across every team member.
- **Status Workflows**: 1-click status updating (`pending` → `approved` / `rejected`).
- **One-Click CSV Export**: Instant financial report generation and download powered by PapaParse.
- **Traceable Audit Logs**: Full chronological tracking recording who approved, rejected, or submitted expenses with timestamped metadata.

### 📊 Visual Analytics & Insights
- **Interactive Dashboards**: Powered by **Recharts** with responsive bar charts, category breakdowns, and monthly expense distribution trends.
- **Real-Time Indicators**: Status chips, budget statistics, and instant visual metrics.

### 🎨 Polished UX & Localized Currency
- **Hybrid Design System**: Tailored with Material UI (MUI v7) component foundations and Tailwind CSS v4 utility classes.
- **Egyptian Currency (`E£` / `EGP`)**: Fully localized across forms, dashboard cards, graphs, tables, and audit trail details.
- **Responsive Feedback**: Toast notifications via `react-hot-toast` for all user actions and error handling.

---

## 🏛 System Architecture

The project is structured as a multi-service repository deployed to Vercel as a single project using Vercel Services rewrites:

```
                  ┌─────────────────────────────────────────┐
                  │          Vercel Unified Domain          │
                  │   https://<your-project>.vercel.app     │
                  └────────────────────┬────────────────────┘
                                       │
                    Routing Layer (vercel.json rewrites)
                     ├── /api/*   ───► Backend Service (Express 5 Serverless)
                     └── /*       ───► Frontend Service (React 19 + Vite SPA)
                                       │
                  ┌────────────────────┴────────────────────┐
                  │                                         │
        ┌─────────▼─────────┐                     ┌─────────▼─────────┐
        │  Backend Service  │                     │ Frontend Service  │
        │  Express.js / API │                     │ React 19 + Vite   │
        └─────────┬─────────┘                     └───────────────────┘
                  │
        ┌─────────▼─────────┐
        │   MongoDB Atlas   │
        │   Cloud Database  │
        └───────────────────┘
```

---

## 🧰 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite 7, React Router 7, Context API (`AuthContext`), Axios |
| **UI & Styling** | Material UI (MUI v7), Tailwind CSS v4, Emotion, Lucide / MUI Icons |
| **Data & Charts** | Recharts, PapaParse (CSV generation) |
| **Backend** | Node.js (v18+), Express.js 5.1 (ES Modules) |
| **Database** | MongoDB Atlas, Mongoose 8 (with Serverless connection caching) |
| **Security & Auth** | JSON Web Tokens (`jsonwebtoken`), Password Hashing (`bcryptjs`), CORS |
| **Tooling & Orchestration** | Concurrently, ESLint 9, Nodemon |
| **Deployment** | Vercel (Unified Multi-Service Architecture via `vercel.json`) |

---

## 🔌 REST API Reference

Base URL (Local): `http://localhost:5000/api`  
Base URL (Production): `/api`

### 1. Authentication (`/api/auth`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Create a new user account (`name`, `email`, `password`, `role`) |
| `POST` | `/api/auth/login` | Public | Authenticate user and return JWT bearer token |
| `GET` | `/api/auth/me` | Protected | Fetch authenticated user's profile |

### 2. Expenses (`/api/expenses`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/expenses/` | Protected (User) | Add a new expense (triggers Audit Log) |
| `GET` | `/api/expenses/my` | Protected (User) | Get all expenses created by the current user |
| `GET` | `/api/expenses/` | Protected (Admin) | Retrieve all system expenses with populated user details |
| `PATCH`| `/api/expenses/:id/status`| Protected (Admin) | Update expense status (`pending`, `approved`, `rejected`) |

### 3. Audit Logs (`/api/audit-logs`)

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/audit-logs/` | Protected (Admin) | Retrieve chronological history of expense submissions & status changes |

---

## 📁 Folder Structure

```txt
expense-tracker/
├── package.json                 # Root package: concurrently dev runner
├── vercel.json                  # Vercel Services multi-service configuration
│
├── backend/                     # Node.js + Express 5 Backend Service
│   ├── package.json
│   ├── server.js                # Express entrypoint with DB middleware & serverless export
│   ├── config/
│   │   └── db.js                # Mongoose connection with serverless connection pooling
│   ├── controllers/
│   │   ├── authController.js    # Register, login, user profile
│   │   ├── expenseController.js # Expense CRUD & status transitions
│   │   └── auditController.js   # Audit logs query handler
│   ├── middlewares/
│   │   ├── authMiddleware.js    # JWT verification & role inspection (protect, isAdmin)
│   │   ├── errorHandler.js      # Global error formatter
│   │   └── notFound.js          # 404 handler
│   ├── models/
│   │   ├── User.js              # User schema with hashed passwords
│   │   ├── Expense.js           # Expense schema (amount, category, status)
│   │   └── AuditLog.js          # Immutable event log schema
│   └── utils/
│       └── generateToken.js     # JWT token utility
│
└── frontend/                    # React 19 + Vite 7 Frontend Service
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx             # React DOM root entry
        ├── App.jsx              # Application router & layout wrapping
        ├── api/
        │   ├── axios.js         # Axios instance with baseURL fallback & auth interceptor
        │   ├── auth.js          # Auth API requests
        │   ├── expense.js       # Expense API requests
        │   └── audit.js         # Audit API requests
        ├── context/
        │   └── AuthContext.jsx  # Global user state & token storage
        ├── components/
        │   ├── Header.jsx       # Responsive navigation bar with role-aware menu
        │   ├── Footer.jsx       # Global footer
        │   ├── Loader.jsx       # Loading spinner
        │   └── ProtectedRoute.jsx # Route guard enforcing authentication & admin roles
        └── pages/
            ├── LoginPage.jsx    # User sign-in
            ├── RegisterPage.jsx # New user registration
            ├── Dashboard.jsx    # User dashboard with expense cards & summary
            ├── ExpenseForm.jsx  # Add expense modal/form
            ├── AdminPanel.jsx   # Admin table, status action toggles, CSV export
            ├── AuditLogs.jsx    # Audit trail review with E£ currency formatting
            ├── Insights.jsx     # Visual Recharts charts & statistics
            └── NotFound.jsx     # 404 fallback page
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [npm](https://www.npmjs.com/) v9.0.0 or higher
- A running [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or local MongoDB instance

---

### Unified Quick Start (Recommended)

Run both Frontend and Backend concurrently from the root directory with one command:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AhmedKhaledYaseen/expense-tracker.git
   cd expense-tracker
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```
   *(Or individually run `npm install` in the root, `backend/`, and `frontend/`)*

3. **Configure Environment Variables:**
   - Create `backend/.env` (see [Environment Variables](#-environment-variables)).
   - Create `frontend/.env` (optional for local, defaults to `/api` or `http://localhost:5000/api`).

4. **Start local development:**
   ```bash
   npm run dev
   ```
   - Frontend starts at: `http://localhost:5173`
   - Backend API starts at: `http://localhost:5000`

---

### Manual Setup

If you prefer running frontend and backend in separate terminals:

#### 1. Backend

```bash
cd backend
npm install
npm run dev
```

#### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `PORT` | Local server port | `5000` |
| `MONGO_URI` | MongoDB Atlas Connection String | `mongodb+srv://<user>:<password>@cluster.mongodb.net/expense-tracker?retryWrites=true&w=majority` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `your_super_secret_jwt_key_here` |

### Frontend (`frontend/.env`)

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Base endpoint for API requests | In production on Vercel: `/api`. In local development: `http://localhost:5000/api` |

> [!NOTE]
> In production on Vercel, `axios.js` automatically falls back to `/api` (same origin) when `VITE_API_BASE_URL` is omitted, eliminating CORS and hardcoded domain issues.

---

## ☁️ Deployment on Vercel

This repository is optimized for **Vercel Services**, deploying both frontend and backend from a single repository under one domain.

### 1. Root `vercel.json`

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "services": {
    "backend": {
      "root": "backend",
      "framework": "express"
    },
    "frontend": {
      "root": "frontend",
      "framework": "vite"
    }
  },
  "rewrites": [
    { "source": "/api/(.*)", "destination": { "service": "backend" } },
    { "source": "/(.*)", "destination": { "service": "frontend" } }
  ]
}
```

### 2. MongoDB Atlas Whitelist (Crucial)
Vercel serverless functions execute using dynamic IP addresses. In order for Vercel to communicate with your MongoDB cluster:
1. Go to **MongoDB Atlas Console**.
2. Navigate to **Network Access** under **Security**.
3. Add IP Address: `0.0.0.0/0` (Allow Access from Anywhere).

### 3. Vercel Project Environment Variables
Set the following under **Project Settings ➔ Environment Variables** in your Vercel Dashboard:
- `MONGO_URI` = `<Your MongoDB connection string>`
- `JWT_SECRET` = `<Your JWT secret>`

---

## 👥 Role-Based Access Control (RBAC)

The system differentiates between two user roles:

| Capability | Employee (`user`) | Administrator (`admin`) |
| :--- | :---: | :---: |
| Submit New Expenses | ✅ | ✅ |
| View Personal Expenses & History | ✅ | ✅ |
| Filter & Search Own Records | ✅ | ✅ |
| View All Company / Team Expenses | ❌ | ✅ |
| Approve / Reject Expense Claims | ❌ | ✅ |
| Export Data to CSV | ❌ | ✅ |
| View System Audit Trail Logs | ❌ | ✅ |
| Visual Analytics & Insights | ✅ | ✅ |

---

## 🧑‍💻 Author & Contact

**Ahmed Khaled**  
- 📧 **Email**: [ahmed.khaled2011k@gmail.com](mailto:ahmed.khaled2011k@gmail.com)  
- 📞 **Phone / WhatsApp**: `+201120610902`  
- 💼 **GitHub**: [@AhmedKhaledYaseen](https://github.com/AhmedKhaledYaseen)  
- 📍 **Location**: Egypt

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
