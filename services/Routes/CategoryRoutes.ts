import mongoose from "mongoose"
import { Request, Response } from "express"
import { Categories } from "../../models/Categories"

// get all categories
export const getAll = async (req: Request, res: Response) => {
    try {
        Categories.find({})
            .then(data => {
                res.status(200).json(data)
            })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

// Get category by name
export const getOne = async (req: Request, res: Response) => {
    const name = req.params.name

    try {
        const query = { name: name }
        Categories.findOne(query)
            .then(data => {
                res.status(200).json(data)
            })
    } catch (err) {
        res.status(500).json(err)
    }
}
