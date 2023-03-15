const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        console.log("UIIIIIIIII",db);
        await mongoose.connect(db,{
            useNewUrlParser: true
        });
        console.log("Mongo DB Connected");
    } catch (err) {
        console.error('Mongo DB not Connected',err.message);
        process.exit(1);
    }
}

module.exports = connectDB;