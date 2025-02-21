import mongoose, { ObjectId, Schema } from "mongoose";

export interface IUser {
    _id: ObjectId,
    uid: string,
    name: string,
}

const userSchema = new Schema<IUser>({
    _id: { type: Schema.Types.ObjectId, required: true },
    uid: { type: String, unique: true, required: true },
    name: { type: String, required: true },
})

export const User = mongoose.model<IUser>('users', userSchema)

export const uidGen = () => {
    let uid = "";

    // Generate the first 4 numeric characters
    for (let i = 0; i < 4; i++) {
        uid += Math.floor(Math.random() * 10).toString();
    }

    // Generate the remaining 6 alphanumeric characters
    for (let i = 0; i < 6; i++) {
        const randomChar = Math.random();
        if (randomChar < 0.5) { // 50% chance for uppercase
            uid += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z (ASCII 65-90)
        } else { // 50% chance for lowercase
            uid += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z (ASCII 97-122)
        }
    }

    return uid;
}