
#  FoodFlow – fullstack-food-delivery-system

**FoodFlow** is a dynamic and responsive full-stack food delivery application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It enables users to order food online, make secure payments, and track their orders. An integrated **admin panel** allows authorized personnel to manage menu items, view orders, and perform other administrative tasks.

---

##  Live Demo

- 🔗 [Frontend - User Site](https://foodflow-ui.onrender.com)
- 🔗 [Backend - API Endpoint](https://foodflow-qy5a.onrender.com)
- 🔗 [Admin Panel](https://full-stack-task-management-app-8s31.onrender.com/list)

>  **Important:** Ensure the backend server is active (`https://foodflow-api.onrender.com`) before accessing the frontend or admin panel.

---

###  Frontend – User Interface (React)
- Developed using **React.js**
- Styled with **CSS** and **Bootstrap 5**
- Client-side routing with **React Router DOM**
- Integrated with backend using **Axios**
- Responsive and mobile-friendly layout
- Secure handling of login, signup, and checkout flow

---

###  Admin Panel – Management Dashboard (React)
- Built as a separate **React SPA**
- Admin login using **JWT authentication**
- Dynamic forms for adding/editing menu items
- View and manage all orders
- Responsive admin UI with Bootstrap
- Designed for scalability and modularity

---

###  Backend – REST API (Node.js + Express)
- Built with **Node.js** and **Express.js**
- Structured using **MVC architecture**:
  - **Models** – Mongoose schemas for users, orders, food items
  - **Controllers** – Business logic and API response handling
  - **Routes** – Express Router for endpoints
- **MongoDB Atlas** for database
- **JWT** for secure user/admin authentication
- **Stripe API** for payment processing
- **Bcrypt.js** for password encryption
- **CORS** and **dotenv** used for secure configuration

---
---

##  Project Overview

This application is divided into three main modules:
- **Backend** (Node.js/Express): REST API using MVC architecture
- **Frontend** (React): User-facing food ordering platform
- **Admin Panel** (React): Separate dashboard for admin functionalities

---

##  Payment Integration (Test Mode)

Use this **dummy Indian card number** to test the Stripe integration:

- **Card Number:** `4000 0035 6000 0008`
- **Expiry Date:** Any future date
- **CVV:** Any 3-digit number

---

##  Core Features

###  User Features
- Register and login with JWT-based authentication
- Browse and search menu items
- Add to cart and place orders via Stripe
- View order history and current order status

###  Admin Features
- Admin login and dashboard access
- Add, edit, delete food items from menu
- View and manage all orders placed by users

###  UI/UX Highlights
- Single-page applications (SPA) in React
- Mobile-first responsive design
- Smooth transitions and intuitive interactions

---

##  Setup Instructions

### 🔧 Backend Setup
- **Directory:** `/backend`
- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Start Server:**
  ```bash
  node server.js
  ```
- **Environment Variables (.env):**
  ```env
  PORT=5000
  MONGO_URI=your_mongo_db_connection
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET_KEY=your_stripe_key
  ```

- ** Backend Architecture (MVC):**
  - **Models** – Define schemas (Users, Orders, Menu Items)
  - **Controllers** – Handle request logic and responses
  - **Routes** – Manage route endpoints with Express
  - **Middleware** – JWT auth checks, error handlers
  - **Utils** – Payment services, helpers

---

###  Frontend Setup (User Side)
- **Directory:** `/frontend`
- **Commands:**
  ```bash
  npm install
  npm run build
  ```
- **Output Directory:** `/frontend/dist`

---

###  Admin Panel Setup
- **Directory:** `/admin`
- **Commands:**
  ```bash
  npm install
  npm run build
  ```
- **Output Directory:** `/admin/dist`

---

If this project helped or inspired you, please consider starring ⭐ the repository on GitHub!
