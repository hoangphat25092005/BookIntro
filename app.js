require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book.routing');
const userRoutes = require('./routes/user.routing');
const orderRoutes = require('./routes/order.routing');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());
// Connect MONGO DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('✅ Connected to MongoDB successfully');
    console.log('📊 Database:', mongoose.connection.name);
})
.catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.error('🔍 Check your MONGO_URI in .env file');
    console.error('🌐 Ensure your IP is whitelisted in MongoDB Atlas');
    process.exit(1);
});

// API routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

