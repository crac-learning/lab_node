import mongoose from 'mongoose'
import { IProductReview } from '../../models/productReview'

export interface IProductReviewObject extends IProductReview {
  _id: mongoose.Types.ObjectId
}
