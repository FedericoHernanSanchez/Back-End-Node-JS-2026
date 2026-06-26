import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import productsRouter from './src/router/products.router.js';
import usersRouter from './src/router/users.router.js';
import categoriesRouter from './src/router/categories.router.js';
import authRouter from './src/router/auth.router.js';

import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/products",productsRouter)
app.use("/api/categories",categoriesRouter)
app.use("/api/users",usersRouter)
app.use("/api/auth",authRouter)

app.get('/', (req, res) => { 
    res.send(`
        <h1>Api de productos</h1>
        <p>Servidor funcionando correctamente</p>
    `); 
});


app.use((req, res) => {
    res.status(404).json({ error : "Ruta no encontrada" });
})

const PORT= process.env.PORT || 3001;

app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`); 
});




const [, , method, endpoint, ...data] = process.argv;

const baseUrl = "https://fakestoreapi.com"

const handleRequest = async () => {

    if (method === "GET") {

        await getProducts();

    } else if (method === "POST") {

        await createProduct();

    } else if (method === "DELETE") {

        await deleteProduct();
    }
};


const getProducts = async () => {

    try {

        const response = await fetch(`${baseUrl}/${endpoint}`);

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
};

const createProduct = async () => {

    try {

        const [title, price, category] = data;

        const newProduct = {
            title,
            price: Number(price),
            category
        };

        const response = await fetch(`${baseUrl}/${endpoint}`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)

        });

        const result = await response.json();

        console.log(result);

    } catch (error) {
        console.log("Error:", error.message);
    }

};

const deleteProduct = async () => {

    try {

        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "DELETE"
        });

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }

};

handleRequest();