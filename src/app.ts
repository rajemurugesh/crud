import express from "express";
import dotenv from "dotenv";
import ProductClass from "./routes/product";
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();

dotenv.config()

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    
    res.json({
        message: "APP is running fine"
    })
})

app.use('/', new ProductClass().router)

const db = 'mongodb+srv://Rajeswari:raje1992@cluster0.vznru.mongodb.net/Data'


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
    console.log("Successfully connected to the database !!");
    
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
    }).catch((err: any) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
    });


