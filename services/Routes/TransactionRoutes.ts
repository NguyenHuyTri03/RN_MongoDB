import { Request, Response } from "express"
import { Transactions } from "../../models/Transactions"
import mongoose from "mongoose"

// get all transactions for one user
export const getAll = async (req: Request, res: Response) => {
    const uid = req.params.uid
    const query = { uid: uid }

    try {
        Transactions.find(query)
            .then(data => {
                res.status(200).json(data)
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Get a single user
export const getOne = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        Transactions.findById(id)
            .then(data => {
                res.status(200).send(data)
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Delete a user
export const deleteOne = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        Transactions.findByIdAndDelete(id)
            .then(() => {
                res.status(200).json({
                    message: 'ok'
                })
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Create a transaction
export const createOne = async (req: Request, res: Response) => {
    const transaction = req.body
    const newId = new mongoose.Types.ObjectId()

    if (transaction.category === '') {
        transaction.category = 'Miscellaneous'
    }

    try {
        const newTransaction = new Transactions({
            _id: newId,
            uid: transaction.uid,
            amount: transaction.amount,
            description: transaction.description,
            date: transaction.date,
            category: transaction.category
        })
        await newTransaction.save()
        res.status(200).json({
            message: 'ok'
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Update a user
export const updateOne = async (req: Request, res: Response) => {
    const newData = req.body

    try {
        const transaction = await Transactions.findById(newData._id)
        transaction!.amount = newData.amount
        transaction!.description = newData.description
        transaction!.date = newData.date
        transaction!.category = newData.category

        transaction?.save()

        res.status(200).json({
            message: 'ok'
        })

    } catch (err) {
        res.status(500).json(err)
    }
}