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
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../model/product.model");
class ProductService {
    saveProduct(name, price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = new product_model_1.Product({
                    name,
                    price
                });
                return yield product.save();
            }
            catch (err) {
                console.debug("Error occured in saveProduct");
                throw err;
            }
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.Product.find().exec();
            }
            catch (err) {
                console.debug("Error occured in saveProduct");
                throw err;
            }
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.Product.findOne({ '_id': id }).exec();
            }
            catch (err) {
                console.debug("Error occured in saveProduct");
                throw err;
            }
        });
    }
    updateProduct(id, name, price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.Product.findOneAndUpdate({ '_id': id }, { 'name': name, 'price': price }).exec();
            }
            catch (err) {
                console.debug("Error occured in updateProduct");
                throw err;
            }
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_model_1.Product.findOneAndDelete({ '_id': id }).exec();
            }
            catch (err) {
                console.debug("Error occured in saveProduct");
                throw err;
            }
        });
    }
}
exports.default = ProductService;
