import mongoose from 'mongoose';

//Movie Schema
const movieSchema = new mongoose.Schema({

    title:{
        type: String,
    },
    genre:{
        type: String,
    },
    director:{
        type: String,
    },
    releaseDate:{
        type: Number,
    },

})

export const Movie = mongoose.model('Movie', movieSchema);

export default Movie;



