const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/eshudb', {
   
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/register", userRoutes);
app.use("/api/auth", authRoutes);

const host = "127.0.0.1";
const port = 8080;
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
