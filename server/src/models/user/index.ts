import mongoose, { Schema } from 'mongoose'

export interface IUser {
  fullName: string
  email: string
  password?: string
  profileImage?: string
}

const User = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    profileImage: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'User',
  }
)

const model = mongoose.model<IUser>('User', User)
export default model
