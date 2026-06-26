import { Router } from 'express';

const router = Router()

const users = [
    { id: 1, name: "Federico", email: "federico@example.com" },
    { id: 2, name: "María", email: "maria@example.com" },
    { id: 3, name: "Juan", email: "juan@example.com" }
];

router.get("/", (req, res) => {
    res.json(users)
})

export default router;