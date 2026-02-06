//setup the server
const express = require('express');
const dotenv = require('dotenv').config(); // allow you to read .env file
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const profileRoutes = require('./routes/Profile.routes');
const postRoutes = require('./routes/Post.routes');
const commentRoutes = require('./routes/Comment.routes');
const cookieParser = require('cookie-parser');
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json()); //middleware to parse json data
//mongodb -> connection string 
app.use(cors({
    origin: "https://linked-in-frontend-alpha.vercel.app",
    credentials: true
}));
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log("err", err.message));
//api
app.use("/api", profileRoutes);
app.use("/api", userRoutes);
//listen to the server
app.use("/api", postRoutes);
app.use("/api", commentRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to LinkedIn Clone Backend</h1>');
});
// register -> (POST) http://localhost:4000/api/register
// server -> http://localhost:4000
module.exports = app
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
