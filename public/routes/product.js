"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("../controller/product"));
class ProductClass {
    constructor() {
        this.router = express_1.default.Router();
        this.checkSample = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json({ "status": "success" });
        });
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.getProducts();
            res.json(result);
        });
        this.getProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.getProduct(req.params.id);
            res.json(result);
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.updateProduct(req.params.id, req.body.name, req.body.price);
            res.json(result);
        });
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.service.deleteProduct(req.params.id);
            res.json(result);
        });
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const price = req.body.price;
            console.log('name ==', name);
            console.log('price ==', price);
            const result = yield this.service.saveProduct(name, price);
            res.json(result);
        });
        this.router.get('/Sample', this.checkSample);
        this.router.post('/addProducts', this.addProduct);
        this.router.get('/getProducts', this.getProducts);
        this.router.get('/getProduct/:id', this.getProduct);
        this.router.put('/getProduct/:id', this.updateProduct);
        this.router.delete('/getProduct/:id', this.deleteProduct);
        this.service = new product_1.default();
    }
}
exports.default = ProductClass;
