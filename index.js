const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

app.use("/", authRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).send("Something went wrong!");
});