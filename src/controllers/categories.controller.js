export const getCategories = (req, res) => {
    res.json({
        message: "Listado de categorias"
    })
}

export const getCategoryById = (req, res) => {
    const { id } = req.params
    res.json({
        message: `Categoria con id ${id}`
    })
}

export const createCategory = (req, res) => {
    const { title } = req.body
    res.status(201).json({
        message: `Categoria ${title} creada`
    })
}

export const updateCategory = (req, res) => {
    const { id } = req.params

    if(id != "1") {
        return res.status(404).json({ error: "Categoria no encontrada" })
    }

    const { title } = req.body

    if(!title) {
        return res.status(422).json({ error: "El titulo es requerido" })
    }

    res.json({
        message: `Se actualizo la categoria con el id ${id} con el titulo ${title}`
    })
}

export const deleteCategory = (req, res) => {
    const { id } = req.params

    if(id != "1") {
        return res.status(404).json({ error: "Categoria no encontrada" })
    }

    res.json({ message: `Se elimino la categoria con el id ${id}` })
}