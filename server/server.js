require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
connectDB()

const app = express()

const PORT = process.env.PORT || 5220

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("publicFiles"))
app.use(express.static("public"))
app.use("/api/users",require("./routes/usersRouter"))
app.use("/api/posts",require("./routes/postsRouter"))
app.use("/api/todos",require("./routes/todosRouter"))
app.use("/api/photos",require("./routes/photosRouter"))
app.get("/", (req, res) => {
    res.json("test")
})

mongoose.connection.once('open', () => {
    console.log('connected to MOngoDB')
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
    })
})

mongoose.connection.on('error', () => {
    console.log(err);
})
