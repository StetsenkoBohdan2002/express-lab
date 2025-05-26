const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://stetsenkobogdanwork:NBTz0kAmJAWU8L7q@cluster0.tlrtqyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'test'
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};

module.exports = connectDB;
