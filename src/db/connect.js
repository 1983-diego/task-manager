const mongoose = require('mongoose')

const connectionString = process.env.MONGO_URI

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB