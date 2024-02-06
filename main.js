import { Product } from "./product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("arroz", "muy verde", 1200, 20, "12ssqw0abs")
const producto2 = new Product("lentejas", "comen las viejas", 2000, 20, "ancjoe32")
const producto3 = new Product("Porotos", "ganate los porotos", 2000, 23, "kcsmnke233")
const producto4 = new Product("Garbanzos", "comen los ganzos", 20003, 20, "ksmkx332")
const producto5 = new Product("ddd", "comen los ganzos", 20003, 20, "ksmkxss332")
const producto6 = new Product("Producto 6", "comen los ganzos", 20003, 20, "ksmvgtvkx332")
const producto7 = new Product("Producto 7", "comen los ganzos", 20003, 20, "ksmrgvkx332")
const producto8 = new Product("Producto 8", "comen los ganzos", 20003, 20, "ksmdekx332")
const producto9 = new Product("Producto 9", "comen los ganzos", 20003, 20, "ksmkddx332")
const producto10 = new Product("Producto 10", "comen los ganzos", 20003, 20, "ksmvvtkx332")

const productManager = new ProductManager('./products.json')

productManager.getProducts()
// productManager.addProduct(producto1)
// productManager.addProduct(producto2)
// productManager.addProduct(producto3)
// productManager.addProduct(producto4)
productManager.addProduct(producto10)
// productManager.addProduct(producto6)
// productManager.addProduct(producto7)
// productManager.addProduct(producto8)
// productManager.addProduct(producto9)
// productManager.addProduct(producto10)
