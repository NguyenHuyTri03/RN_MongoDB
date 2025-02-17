import mongoose, { ObjectId, Schema } from "mongoose";

export interface ITransactions {
    _id: ObjectId,
    uid: string,
    amount: number,
    description: string,
    date: Date,
    category: string
}

const transactionsSchema = new Schema<ITransactions>({
    _id: { type: Schema.Types.ObjectId, required: true },
    uid: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String }
})

export const Transactions = mongoose.model<ITransactions>('categories', transactionsSchema)