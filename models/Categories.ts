import mongoose, { ObjectId, Schema } from "mongoose";

export interface ICategories {
    _id: ObjectId,
    name: string,
}

const categoriesSchema = new Schema<ICategories>({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
})

export const Categories = mongoose.model<ICategories>('categories', categoriesSchema)