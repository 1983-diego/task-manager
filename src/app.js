require('dotenv').config()
const connectDB = require('./db/connect')
const express = require("express")
const app = express() 
const tasks = require("./routes/tasks")
const notFound = require('./middleware/notFound')

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1 align='center'>Task Manager API</h1>")
})

app.use("/api/v1/tasks", tasks)

app.use(notFound)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server running on ${process.env.PORT}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()