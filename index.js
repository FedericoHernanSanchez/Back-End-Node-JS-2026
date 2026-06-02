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