# 🚀 Node.js CRUD API with Auth (JWT + Refresh Tokens)

## 📌 Overview

Production-ready backend with: - Node.js + Express - MongoDB
(Mongoose) - JWT Auth (Access + Refresh Tokens) - Docker + CI/CD ready -
Automated Testing (Jest)

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
    ├── tests/
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

-   POST /api/auth/login
-   POST /api/auth/refresh
-   POST /api/auth/logout

------------------------------------------------------------------------

## 👤 User APIs

-   POST /api/users
-   GET /api/users
-   GET /api/users/:id
-   PUT /api/users/:id
-   DELETE /api/users/:id

------------------------------------------------------------------------

## 📊 Protected Routes

Header:

    Authorization: Bearer <access_token>

------------------------------------------------------------------------

# 🧪 Testing

## 📦 Tools Used

-   Jest
-   Supertest
-   MongoMemoryServer

------------------------------------------------------------------------

## ▶️ Run Tests

    npm test

------------------------------------------------------------------------

## 🧠 How Testing Works

-   Uses in-memory MongoDB (no real DB)
-   Fresh database for every test
-   No data pollution
-   Fast execution

------------------------------------------------------------------------

## 📁 Test Structure

    tests/
    ├── setup.js
    ├── auth.test.js
    ├── user.test.js

------------------------------------------------------------------------

## 🔥 What is Tested

### Auth

-   User registration
-   Login with valid credentials
-   Invalid login handling

### Users

-   Get all users
-   Protected route access

------------------------------------------------------------------------

## ⚠️ Important Notes

-   Tests use separate DB (MongoMemoryServer)
-   JWT secrets are set in test environment
-   No dependency on real database

------------------------------------------------------------------------

## 🧠 Example Test

``` js
const res = await request(app)
  .post('/api/auth/login')
  .send({
    email: 'test@example.com',
    password: '123456'
  });

expect(res.statusCode).toBe(200);
expect(res.body.accessToken).toBeDefined();
```

------------------------------------------------------------------------

## 🔄 CI/CD Ready

Tests can be run in pipeline:

    npm test

------------------------------------------------------------------------

## 🧠 Features

-   Clean Architecture
-   JWT Authentication
-   Refresh Token System
-   Role-based Authorization
-   Error Handling Middleware
-   Automated Testing

------------------------------------------------------------------------

## 🔥 Author

Piyush Suhalka (appsByPiyush)
