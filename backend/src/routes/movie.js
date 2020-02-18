import { Router } from "express";
const router = Router();
import { Movie } from "../models/movieModel";

//get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
        console.log('Get all movies')
    } catch (err) {
        res.json({
            err
        });
        console.log(err);
    };
});

export default router;
