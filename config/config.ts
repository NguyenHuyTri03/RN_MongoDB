const MONGO_URL = 'mongodb+srv://viper:26030104@testcluster.eeq2u.mongodb.net/Transactions'
const SERVER_PORT = 8084

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}