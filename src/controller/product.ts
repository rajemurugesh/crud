import { Product } from "../model/product.model";


class ProductService {
   

    public async saveProduct(name: string, price : number): Promise<any> {
        
        try {
            const product = new Product({
                name,
                price
            });

            return await product.save();
        }catch(err){
            console.debug("Error occured in saveProduct");
            throw err;
        }


    }

    public async getProducts(): Promise<any> {
        
        try {
            
            return await Product.find().exec()
        }catch(err){
            console.debug("Error occured in saveProduct");
            throw err;
        }


    }
    public async getProduct(id: string): Promise<any> {
        
        try {
            
            return await Product.findOne({'_id': id}).exec()
        }catch(err){
            console.debug("Error occured in saveProduct");
            throw err;
        }


    }
    public async updateProduct(id: string, name: string , price: string): Promise<any> {
        
        try {
            
            return await Product.findOneAndUpdate({'_id': id}, {'name': name, 'price': price}).exec()
        }catch(err){
            console.debug("Error occured in updateProduct");
            throw err;
        }


    }

    public async deleteProduct(id: string): Promise<any> {
        
        try {
            
            return await Product.findOneAndDelete({'_id': id}).exec()
        }catch(err){
            console.debug("Error occured in saveProduct");
            throw err;
        }


    }
}

export default ProductService