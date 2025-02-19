import express, { Application, Request, Response } from "express";
import * as UserRouter from './Routes/UserRoutes'
import * as CategoryRouter from './Routes/CategoryRoutes'
import * as TransactionRouter from './Routes/TransactionRoutes'
import cors from 'cors'

export default async (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    // Server health check
    app.get('/ping', (req, res) => {
        res.json({ message: 'ok' })
    })

    /* Routes */
    // Users
    app.get('/users/show/all', UserRouter.getAll)
    app.get('/users/show/:id', cors(), UserRouter.getOne)
    app.post('/users/new', cors(), UserRouter.createOne)
    app.put('/users/update/:id', cors(), UserRouter.updateOne)
    app.delete('/users/delete/:id', cors(), UserRouter.deleteOne)

    // Categories
    app.get('/category/show/all', cors(), CategoryRouter.getAll)
    app.get('/category/show/:name', cors(), CategoryRouter.getOne)

    // Transactions
    app.get('/transactions/show/all/:uid', cors(), TransactionRouter.getAll)
    app.get('/transactions/show/:id', cors(), TransactionRouter.getOne)
    app.post('/transactions/new', cors(), TransactionRouter.createOne)
    app.put('/transactions/update', cors(), TransactionRouter.updateOne)
    app.delete('/transactions/delete/:id', cors(), TransactionRouter.deleteOne)
}
