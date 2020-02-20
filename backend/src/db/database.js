import mongoose from 'mongoose';

//database connection
const dbConnection = () => {
  return mongoose.connect('mongodb+srv://HichamBezzizi:Solution123alfa@firstcluster-wg8cp.mongodb.net/movieDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },()=>{
      console.log("Connection to DB successful!")
  });
};

export {dbConnection};