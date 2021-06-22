import express from "express"
import ProductService from "../controller/product";



class ProductClass{
    public router = express.Router();
    protected service : ProductService

    constructor() {
        this.router.get('/Sample', this.checkSample);
        this.router.post('/addProducts', this.addProduct)
        this.router.get('/getProducts', this.getProducts)
        this.router.get('/getProduct/:id', this.getProduct)
        this.router.put('/getProduct/:id', this.updateProduct)
        this.router.delete('/getProduct/:id', this.deleteProduct)
        this.service = new ProductService()
    }

    private checkSample = async (req: express.Request, res: express.Response) => {
        
        res.json({"status":"success"})
    }

    private getProducts = async (req: express.Request, res: express.Response) => {

        const result = await this.service.getProducts()
        
        res.json(result)
    }
    private getProduct = async (req: express.Request, res: express.Response) => {

        const result = await this.service.getProduct(req.params.id)
        
        res.json(result)
    }

    private updateProduct = async (req: express.Request, res: express.Response) => {

        const result = await this.service.updateProduct(req.params.id, req.body.name, req.body.price)
        
        res.json(result)
    }

    private deleteProduct = async (req: express.Request, res: express.Response) => {

        const result = await this.service.deleteProduct(req.params.id)
        
        res.json(result)
    }

    private addProduct = async (req: express.Request, res: express.Response) => {

        const name = req.body.name
        const price = req.body.price

        console.log('name ==', name)
        console.log('price ==', price)

        const result = await this.service.saveProduct(name, price)
        
        res.json(result)
    }
    
}

export default ProductClass