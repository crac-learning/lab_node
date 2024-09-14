import mongoose, { Schema } from 'mongoose'
import { IProductObject } from '../../queries/product/types'
import { IUserObject } from '../../queries/user/types'

export interface IProductReview {
  product: mongoose.Types.ObjectId | IProductObject
  user: mongoose.Types.ObjectId | IUserObject
  review: string
  rating: number
}

const ProductReview = new Schema<IProductReview>(
  {
    product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    review: { type: String },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'ProductReview',
  }
)

const model = mongoose.model<IProductReview>('ProductReview', ProductReview)
export default model
