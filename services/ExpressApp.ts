import express, { Application, Request, Response } from "express";
import * as UserController from './Controllers/Users'
import * as CategoryController from './Controllers/Categories'
import * as TransactionControler from './Controllers/Transactions'
// import Config from 'react-native-config'
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
    app.get('/users/show/all', UserController.getAll)
    app.get('/users/show/:id', cors(), UserController.getOne)
    app.post('/users/new', cors(), UserController.createOne)
    app.put('/users/update/:id', cors(), UserController.updateOne)
    app.delete('/users/delete/:id', cors(), UserController.deleteOne)

    // Categories
    app.get('/category/show/all', cors(), CategoryController.getAll)
    app.get('/category/show/:name', cors(), CategoryController.getOne)
    app.put('/category/update', cors(), CategoryController.updateOne)

    // Transactions
    app.get('/transactions/show/all/:uid', cors(), TransactionControler.getAll)
    app.get('/transactions/show/:id', cors(), TransactionControler.getOne)
    app.post('/transactions/new', cors(), TransactionControler.createOne)
    app.put('/transactions/update', cors(), TransactionControler.updateOne)
    app.delete('/transactions/delete/:id', cors(), TransactionControler.deleteOne)
    app.get('/transactions/filter', cors(), TransactionControler.filter)
}
