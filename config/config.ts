import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
    mongo: {
        url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@testcluster.eeq2u.mongodb.net/${process.env.DB_NAME}`
    },
    server: {
        port: process.env.SERVER_PORT
    }
}
