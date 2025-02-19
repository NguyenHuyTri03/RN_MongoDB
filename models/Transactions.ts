import mongoose, { ObjectId, Schema } from "mongoose";

export interface ITransactions {
    _id: ObjectId,
    uid: string,
    amount: number,
    description: string,
    date: string,
    category: string
}

const transactionsSchema = new Schema<ITransactions>({
    _id: { type: Schema.Types.ObjectId, required: true },
    uid: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: String, required: true },
    category: { type: String }
})

export const Transactions = mongoose.model<ITransactions>('transactions', transactionsSchema)