"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_1 = __importDefault(require("./routes/product"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        message: "APP is running fine"
    });
});
app.use('/', new product_1.default().router);
const db = 'mongodb+srv://Rajeswari:raje1992@cluster0.vznru.mongodb.net/Data';
mongoose_1.default.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
    console.log("Successfully connected to the database !!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
