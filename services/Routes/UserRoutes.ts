import { Request, Response } from "express"
import { uidGen, User } from "../../models/Users"
import mongoose from "mongoose"

// get all users
export const getAll = async (req: Request, res: Response) => {
    try {
        User.find({})
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
        User.findById(id)
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
        User.findByIdAndDelete(id)
            .then(() => {
                res.status(200).json({
                    message: 'ok'
                })
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Create a user
export const createOne = async (req: Request, res: Response) => {
    const user = req.body
    const newId = new mongoose.Types.ObjectId()
    const newUid = uidGen()

    try {
        const newUSer = new User({
            name: user.name,
            uid: newUid,
            _id: newId
        })
        await newUSer.save()
        res.status(200).json({
            message: 'ok'
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

// Update a user
export const updateOne = async (req: Request, res: Response) => {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const newData = req.body

    try {
        const query = { _id: id }
        const user = await User.findById(id)
        user!.name = newData.name

        user?.save()

        res.status(200).json({
            message: 'ok'
        })

    } catch (err) {
        res.status(500).json(err)
    }
}