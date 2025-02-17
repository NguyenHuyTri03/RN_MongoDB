import mongoose, { ObjectId, Schema } from "mongoose";

export interface ICategories {
    name: string,
    _id: ObjectId
}

const categoriesSchema = new Schema<ICategories>({
    name: { type: String, required: true },
    _id: { type: Schema.Types.ObjectId, required: true }
})

export const Categories = mongoose.model<ICategories>('categories', categoriesSchema)