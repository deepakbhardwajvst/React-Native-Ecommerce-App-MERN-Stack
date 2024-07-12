import express from "express";
import colors from "colors"; // console per color
import morgan from "morgan"; // localhost per huye refresh yah action ke liya , konsa url hit huya hai yeh pata chlta hai
import cors from "cors"; // so we dont get cross origin error to connect client an server
import dotenv from "dotenv"; // managing sensitive data such as API keys, database credentials
import testRoutes from "./routes/testRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import categoryRoutes from "./routes/categoryRoutes.js"; 
import orderRoutes from "./routes/orderRoutes.js"; 
import Stripe from "stripe";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
// dot env config
dotenv.config();
//stripe configuration
export const stripe = new Stripe(process.env.STRIPE_SECRET);
// database connection
connectDB();
// cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
// rest object
const app = express();

// middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// route
app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/order", orderRoutes);
app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>app.get ne kiya run Forward slash per </h1>");
});

// port
const PORT = process.env.PORT || 4040;
// listen
app.listen(PORT, () => {
  console.log(
    `SERVER IS RUNNING ${process.env.PORT} on ${process.env.NODE_ENV} `
      .bgMagenta.white
  );
});
// 31th   13:06
