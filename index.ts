import * as dotenv from 'dotenv'
import DBConnect from "./services/Database";
import express from 'express';
import ExpressApp from "./services/ExpressApp";
import { config } from "./config/config";


const StartServer = async () => {
    dotenv.config()
    const app = express()
    await DBConnect()
    await ExpressApp(app)

    app.listen(config.server.port, () => {
        console.log(`Server connected on port: ${config.server.port}`)
    })
}

StartServer()
