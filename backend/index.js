const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port = 4000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb://localhost:27017")
mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas"))

app.use("/users", require("./routes/userRoute"))

if(require.main == module){
  app.listen(port, () => console.log(`API is now online on port ${port}`))
}

