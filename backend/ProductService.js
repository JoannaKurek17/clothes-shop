import data from "./data.json" assert { type: "json" };

class ProductService {
    async getProducts(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.products)
            }, 2000)
        })
    }
}

export const productService = new ProductService();