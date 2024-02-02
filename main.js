import { Product } from "./product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("arroz", "muy verde", 1200, 20, "12ssqw0abs")
const producto2 = new Product("lentejas", "comen las viejas", 2000, 20, "ancjoe32")
const producto3 = new Product("Porotos", "ganate los porotos", 2000, 23, "kcsmnke233")
const producto4 = new Product("Garbanzos", "comen los ganzos", 20003, 20, "ksmkx332")

const productManager = new ProductManager('./products.json')

productManager.getProducts()
// productManager.addProduct(producto2)
// productManager.addProduct(producto3)
// productManager.addProduct(producto4)

