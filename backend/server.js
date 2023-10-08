import  express  from "express";

import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

connectDB(); //connect to mongodb

const app = express();

app.get('/' , (req , res) => {
    res.send('apii runnung');
});


app.use('/api/products',productRoutes);



app.listen(port, () => console.log (`server runnong on port ${port}`))