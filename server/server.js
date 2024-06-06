import express from "express";
import colors from "colors"; // console per color
import morgan from "morgan"; // localhost per huye refresh yah action ke liya , konsa url hit huya hai yeh pata chlta hai
import cors from "cors"; // so we dont get cross origin error to connect client an server
import dotenv from "dotenv"; // managing sensitive data such as API keys, database credentials 
import testRoutes from "./routes/testRoutes.js"
import connectDB from "./config/db.js";
// dot env config
dotenv.config()

// database connection
connectDB()

// rest object
const app = express()

// middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// route
app.use("/api/v1",testRoutes)
app.get('/', (req,res)=>{
    return res.status(200).send("<h1>app.get ne kiya run Forward slash per </h1>")
}) 

// port
const PORT = process.env.PORT || 4040;
// listen
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ${process.env.PORT} `.bgMagenta.white) 
})