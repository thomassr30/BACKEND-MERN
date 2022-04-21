import mongoose from 'mongoose'
import  {config} from'dotenv'
config()

export const connectDB =  async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DB)
        console.log('conectado mongodb: ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

