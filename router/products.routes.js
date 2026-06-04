import {Router} from 'express';

const router = Router()

const productos = [
  {
    id: 1,
    nombre: "Notebook Lenovo",
    precio: 850000,
    stock: 12
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    precio: 25000,
    stock: 30
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Redragon",
    precio: 65000,
    stock: 18
  }
];



router.get("/",(req,res) => {
    res.json(productos)
})


router.get("/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const movie = productos.find((product) => product.id === id);
    if (movie) {
        res.json(movie)
    } else{
        res.status(404).json({error : "Pelicula no encontrada"})
    }
})

router.post("/create",(req,res) => {
    res.json({message :"crear nueva pelicula"})
})


router.put("/:id",(req,res) => {
    res.json({message : "actualizar pelicula"})
})

router.delete("/:id",(req,res) => {
    res.json({message : "borrar pelicula"})
})

export default router;