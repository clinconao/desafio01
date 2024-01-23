class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        // Validar que no se repita el campo "code"
        if (this.products.find(p => p.code === product.code)) {
            throw new Error("El código del producto ya existe");
        }

        // Validar que todos los campos sean obligatorios
        for (const key in product) {
            if (product[key] === undefined || product[key] === "") {
                throw new Error(`El campo "${key}" es obligatorio`);
            }
        }

        // Generar un code tipo id único
        product.code = Math.random().toString(36).substr(2, 18);

        // Crear un id autoincrementable
        product.id = this.products.length + 1;

        // Agregar el producto al arreglo
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("No se encontró el producto");
        }
        return product;
    }
}

const productManager = new ProductManager();

// Agregar un producto
productManager.addProduct({
    tittle: 'Album',
    product: 'Producto 1',
    description: 'Es un libro de albunes',
    price: 100,
    thumbnail : 'null',
    stock: 30
});

// Obtener todos los productos
const products = productManager.getProducts();
console.log(products);

const product = productManager.getProductById();
console.log(product);

