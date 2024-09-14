import mongoose from 'mongoose'
import { IProduct } from '../../models/product'
import { IProductReview } from '../../models/productReview'

export interface IProductObject extends IProduct {
  _id: mongoose.Types.ObjectId
}

export interface IProductObjectWithRating extends IProduct {
  _id: mongoose.Types.ObjectId
  reviews: IProductReview[]
}
