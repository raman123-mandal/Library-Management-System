const express= require('express');

const app=express();
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth');
require('dotenv').config();
const connectDB=require('./config/db');
connectDB();

app.use(cookieParser());

// --- YE WALA HISSA PASTE KAREIN ---
// Yeh line aapke browser ke security guard ko bolegi ki localhost ko block na kare
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy", 
    "default-src 'self'; connect-src 'self' http://localhost:5000 http://localhost:3000; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );
  next();
});
// ---------------------------------

const PORT=process.env.PORT || 3000;

//ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});