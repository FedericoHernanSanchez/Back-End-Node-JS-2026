import db from "../config/firebase.js";
import { collection , addDoc} from "firebase/firestore";


const productsCollection = collection(db, "products");

const products = [
  {
    name: "Laptop Dell",
    price: 899.99,
    stock: 15
  },
  {
    name: "Mouse Logitech",
    price: 29.99,
    stock: 45
  },
  {
    name: "Teclado Mecánico",
    price: 89.99,
    stock: 22
  },
  {
    name: "Monitor LG 27\"",
    price: 399.99,
    stock: 8
  },
  {
    name: "Headphones Sony",
    price: 199.99,
    stock: 30
  }
];

const createProducts = () => {
    products.forEach(async (product) => {
        await addDoc(productsCollection, product);
    });
}

createProducts();