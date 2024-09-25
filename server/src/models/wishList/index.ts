import mongoose, { Schema } from 'mongoose'
import { IUserObject } from '../../queries/user/types'
import { IProductObject } from '../../queries/product/types'

export interface IWhishlist {
  product: mongoose.Types.ObjectId | IProductObject
  user: mongoose.Types.ObjectId | IUserObject
}

const Whishlist = new Schema<IWhishlist>(
  {
    product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
    collection: 'Whishlist',
  }
)

const model = mongoose.model<IWhishlist>('Whishlist', Whishlist)
export default model
