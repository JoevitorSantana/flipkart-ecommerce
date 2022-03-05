const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin/user');
const categoryRoutes = require('./routes/admin/category');


env.config();
app.use(express.json());

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.42ke1.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
    console.log('Database connected');
});

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})