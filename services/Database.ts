import mongoose, { ObjectId, Schema, Types } from "mongoose";
import { config } from "../config/config";
import { User } from "../models/Users";

export default async () => {
    try {
        const mongoCon = await mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })

        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


