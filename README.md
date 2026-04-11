# 🚀 Node.js CRUD API with Auth (JWT + Refresh Tokens)

## 📌 Overview

This project is a production-ready backend built using: - Node.js -
Express.js - MongoDB (Mongoose) - JWT Authentication (Access + Refresh
Tokens)

------------------------------------------------------------------------

## 📁 Project Structure

    crud-api/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── services/
    ├── middlewares/
    ├── utils/
    ├── app.js
    ├── server.js
    └── .env

------------------------------------------------------------------------

## ⚙️ Setup

### 1. Install dependencies

    npm install

### 2. Create `.env`

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/cruddb
    JWT_SECRET=access_secret_key
    JWT_REFRESH_SECRET=refresh_secret_key

### 3. Run server

    node server.js

------------------------------------------------------------------------

## 🔐 Authentication APIs

### Login

POST /api/auth/login

### Refresh Token

POST /api/auth/refresh

### Logout

POST /api/auth/logout

------------------------------------------------------------------------

## 👤 User APIs

-   POST /api/users
-   GET /api/users
-   GET /api/users/:id
-   PUT /api/users/:id
-   DELETE /api/users/:id

------------------------------------------------------------------------

## 📊 Protected Routes

Use header:

    Authorization: Bearer <access_token>

------------------------------------------------------------------------

## 🧠 Features

-   JWT Authentication
-   Refresh Token System
-   Role-based Authorization
-   Error Handling Middleware
-   Clean Architecture

------------------------------------------------------------------------

## 🔥 Author

Piyush Suhalka(appsByPiyush)
