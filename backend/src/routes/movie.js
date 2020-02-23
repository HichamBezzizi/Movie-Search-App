import { Router } from "express";
const router = Router();
import { Movie } from "../models/movieModel";

//get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
    console.log(movies);
    console.log("Get all movies!");
  } catch (err) {
    res.json({
      err
    });
    console.log(err);
  }
});

//add a movie
router.post("/", async (req, res) => {
  const addMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    director: req.body.director,
    releaseDate: req.body.releaseDate
  });
  try {
    const savedMovie = await addMovie.save();
    res.json(savedMovie);
    console.log("Movie added!");
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//get a movie
router.get("/:movieId", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    res.json(movie);
    console.log("Got 1 movie!");
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//get random movie
router.get("/randomMovie/:random", async (req, res) => {
  // try {
  //   const randomMovie = await Movie.find().then(movies => {
  //     const random = Math.floor(Math.random() * movies.length);
  //     return movies[random];
  //   });
  //   res.json(randomMovie);
  //   console.log("Got a random movie!");
  // } catch (err) {
  //   res.json({
  //     message: err
  //   });
  // }
});


//delete a movie
router.delete("/:movieId", async (req, res) => {
  try {
    const removeMovie = await Movie.remove({
      _id: req.params.movieId
    });
    res.json(removeMovie);
    console.log("Movie deleted!");
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//update a movie
router.put("/:movieId", async (req, res) => {
  try {
    const updateMovie = await Movie.updateOne(
      {
        _id: req.params.movieId
      },
      {
        $set: {
          title: req.body.title,
          genre: req.body.genre,
          director: req.body.director,
          releaseDate: req.body.releaseDate
        }
      }
    );
    res.json(updateMovie);
    console.log("Movie updated with id: ", req.params.movieId);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

export default router;
