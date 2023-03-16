const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true
        });
    } catch (err) {
        console.error('Mongo DB not Connected',err.message);
        process.exit(1);
    }
}

module.exports = connectDB;