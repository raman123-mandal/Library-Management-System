# 📚 Library Management System

A full-featured **Library Management System** built using **Node.js, Express.js, MongoDB, EJS, JWT Authentication, and Role-Based Access Control (RBAC)**.

This project enables administrators to manage books and users, while students can borrow and return books, view their borrowing history, and manage their profiles.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Role-Based Access Control (Admin & Student)
- Protected Routes
- Logout

---

### 👨‍🎓 Student Features

- Dashboard
- View Available Books
- Search Books
- Borrow Books
- Return Borrowed Books
- Borrow History
- View Profile
- Update Profile
- Dashboard Statistics
  - Total Books Issued
  - Returned Books
  - Pending Returns
  - Total Fine

---

### 👨‍💼 Admin Features

- Admin Dashboard
- Add New Books
- Edit Books
- Delete Books
- Manage Library Catalog
- View All Borrow Records
- Manage Users
- Dashboard Statistics
  - Total Users
  - Total Books
  - Available Books
  - Borrowed Books
  - Overdue Books

---

## 📸 Project Screenshots

### Login Page

> Replace with your GitHub image link

![Login](screenshots/login.png)

---

### Student Dashboard

![Dashboard](screenshots/dashboard.png)

---

### Available Books

![Books](screenshots/books.png)

---

### Borrow History

![Borrow History](screenshots/borrow-history.png)

---

### Student Profile

![Profile](screenshots/profile.png)

---

### Add New Book (Admin)

![Add Book](screenshots/add-book.png)

---

### Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### Frontend

- HTML
- CSS
- EJS

### Tools

- Git
- GitHub
- Postman
- VS Code

---

## 📂 Project Structure

```
LibraryManagementSystem
│
├── config/
├── Controler/
├── middleware/
├── model/
├── routes/
├── view/
│
├── index.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 📦 Database Collections

### User

```
- name
- email
- password
- role
- studentId
```

---

### Book

```
- title
- author
- isbn
- publishedYear
- category
- totalCopies
- availableCopies
- description
```

---

### Borrow

```
- student
- book
- borrowDate
- dueDate
- returnDate
- status
- fine
```

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Role-Based Authorization
- Duplicate Email Prevention
- Unique ISBN Validation

---

## 📊 Dashboard Statistics

### Student Dashboard

- Total Books Issued
- Returned Books
- Pending Returns
- Total Fine

### Admin Dashboard

- Total Users
- Total Books
- Available Books
- Borrowed Books
- Overdue Books

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/raman123-mandal/Library-Management-System.git
```

Move into project folder

```bash
cd LibraryManagementSystem
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=7000

MONGODB_URI=mongodb://localhost:27017/library_management

JWT_SECRET=your_secret_key
```

Run the server

```bash
npm start
```

---

## 📌 Future Improvements

- Email Notifications
- Book Reservation System
- Fine Payment Gateway
- QR Code for Books
- Barcode Scanner
- Book Reviews & Ratings
- Book Cover Image Upload
- PDF Report Generation
- REST API Version
- Docker Support
- MongoDB Atlas Deployment

---

## 🧠 Concepts Used

- MVC Architecture
- Authentication
- Authorization
- JWT
- bcrypt
- CRUD Operations
- MongoDB Relationships
- Mongoose Populate
- Route Protection
- Middleware
- Search
- Pagination
- Dashboard Analytics

---

## 🎯 Learning Outcomes

This project helped me learn:

- Authentication using JWT
- Role-Based Access Control
- MongoDB Schema Design
- Mongoose Relationships
- Express Middleware
- CRUD Operations
- Dashboard Analytics
- Git & GitHub Workflow
- Project Folder Structure
- Backend Development Best Practices

---

## 👨‍💻 Author

**Ramanjeet Mandal**

- GitHub: https://github.com/raman123-mandal
- LinkedIn: *(Add your LinkedIn profile here)*

---

## ⭐ If you found this project useful

Please consider giving it a **Star ⭐** on GitHub.