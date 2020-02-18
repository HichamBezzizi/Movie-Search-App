
import mongoose from 'mongoose';

//database connection
// mongoose.connect('mongodb+srv://HichamBezzizi:Solution123alfa@firstcluster-wg8cp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connection to database established!'))

//database connection
const dbConnection = () => {
  return mongoose.connect('mongodb+srv://HichamBezzizi:Solution123alfa@firstcluster-wg8cp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },()=>{
      console.log("Connection to DB successful!")
  });
};

export {dbConnection};