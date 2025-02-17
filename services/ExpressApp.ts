import express, { Application, Request, Response } from "express";
import * as UserRouter from './Routes/UserRoutes'
import * as CategoryRouter from './Routes/CategoryRoutes'

export default async (app: Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // Server health check
    app.get('/ping', (req, res) => {
        res.json({ message: 'ok' })
    })

    /* Routes */
    // Users
    app.get('/users/show/all', UserRouter.getAll)
    app.get('/users/show/:id', UserRouter.getOne)
    app.post('/users/new', UserRouter.createOne)
    app.put('/users/update/:id', UserRouter.updateOne)
    app.delete('/users/delete/:id', UserRouter.deleteOne)

    // Categories
    app.get('/category/show/all', CategoryRouter.getAll)
    app.get('/category/show/:name', CategoryRouter.getOne)

    // Transactions

}
