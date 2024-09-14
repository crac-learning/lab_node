import mongoose, { Schema } from 'mongoose'
import { IUserObject } from '../../queries/user/types'

export interface IUserAddress {
  user: mongoose.Types.ObjectId | IUserObject
  address: string
  city: string
  state: string
  pincode: number
}

const UserAddress = new Schema<IUserAddress>(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'user_address',
  }
)

const model = mongoose.model<IUserAddress>('UserAddress', UserAddress)
export default model
