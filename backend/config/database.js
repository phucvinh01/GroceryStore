const mongoose = require('mongoose');


const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/GHN');
        console.log("MongoDB database connected");
    } catch (err) {
        console.log("MongoDB database connected failed");
    }
}

module.exports = connectDatabase