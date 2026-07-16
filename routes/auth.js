
const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/AdminMiddleware');
const Borrow = require('../model/borrow');

const { registerUser, loginUser, addBookHandler,handleViewBooks ,editBookHandler,deleteBookHandler,searchBooksHandler,handleBorrowBook,handleReturnBook,adminDashboardHandler,dashboardHandler,handleViewBorrows,handleViewProfile,handleUpdateProfile,handleEditeProfile} = require('../Controler/authHandler');

// home page
// 1. Bina login ke books dekhne wala public page
router.get('/', async (req, res) => {
  try {
    // Database se saari books nikalo bina kisi authentication ke
    const Book = require('../model/book'); // Agar top par imported nahi hai toh
    const books = await Book.find({});
    res.render('home', { books });
  } catch (error) {
    res.status(500).send("Error loading home page");
  }
});

// Register route
router.get('/register', (req, res) =>{res.render('userRegister')}); 
router.post('/register', registerUser);

// Login route
router.get('/login', (req, res) =>{
const message=req.query.message || '';
res.render('userLogin')
});

router.post('/login',loginUser);

// Logout route
// routes/auth.js
router.get('/logout', (req, res) => {
  // 1. Browser se login token ki cookie saaf karo
  res.clearCookie('token', { 
    httpOnly: true, 
    sameSite: 'strict',
    path: '/' // Yeh zaroori hai taaki poori website se cookie delete ho jaye
  });
  
  // 2. Wapas login screen par bhej do ek success message ke sath
  res.redirect('/login?message=Logged out successfully');
});

//Add Book
router.get('/addbook',auth,admin,(req,res)=>{res.render('addBook')})
router.post('/addbook',auth,admin,addBookHandler);

//View All Books  Note - Need to update
router.get('/viewBooks',auth,handleViewBooks);

//Edit Book
// 1. Edit page kholne ke liye (GET Request)
router.get('/book/edit/:id', auth, admin, editBookHandler);

// 2. Form ka data submit karne ke liye (POST Request)
router.post('/book/edit/:id', auth, admin, editBookHandler);

//delete book
router.post('/book/delete/:id',auth,admin,deleteBookHandler);

//search book

router.get('/search', auth, searchBooksHandler);

//Borrow Book

router.get('/borrow/:bookId', auth, handleBorrowBook);

router.get('/myBorrows', auth, async (req, res) => {
  try {
    const borrows = await Borrow.find({ studentId: req.user.id }).populate('bookId');
    res.render('myBorrows', { borrows });
  } catch (error) {
    console.error(error);
    res.status(500).send("Records fetch karne me koi error aaya.");
  }
});

//Return  Route

router.get('/book/return/:borrowId', auth,admin,handleReturnBook);

//admin dashboard
router.get('/admin/dashboard', auth, admin,adminDashboardHandler);

//dashboard
router.get('/dashboard', auth ,dashboardHandler);

//view Borrow
router.get('/viewBorrows', auth, admin,handleViewBorrows);

//view student profile
router.get('/profile', auth, handleViewProfile);

//profile edit

router.get('/profile/edit', auth, handleEditeProfile);

//update profile
router.post('/profile/update', auth, handleUpdateProfile);

module.exports = router;
