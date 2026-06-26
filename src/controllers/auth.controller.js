import {generateToken} from "../utils/token.generator.js";

const defaultUser = {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
}


export const login = (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ 
            error: "Faltan credenciales" 
        });
    }

    if(email !== defaultUser.email || password !== defaultUser.password){
        return res.status(401).json({ 
            error: "Credenciales inválidas" 
        });
    }

    const token = generateToken(defaultUser);

    res.json({
        message :"Login exitoso",
        token,
    })
}