import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const connectDB = mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => console.log("MongoDB Connected ")) 
  .catch((error) => {
    console.log("MongoDb Failed ",error.message);
  });


export default connectDB; 