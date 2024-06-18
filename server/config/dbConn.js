const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            authSource: "admin",
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch (err) {
        console.log('error connection to database' + err);
    }
}

module.exports = connectDB