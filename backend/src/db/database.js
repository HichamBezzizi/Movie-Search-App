import mongoose from 'mongoose';

//database connection
const dbConnection = () => {
  return mongoose.connect('mongodb+srv://HichamBezzizi:Solution123alfa@cluster0-vu2hg.mongodb.net/moviesDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },()=>{
      console.log("Connection to DB successful!")
  });
};

export { dbConnection };