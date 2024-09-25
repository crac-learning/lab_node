import mongoose, { Schema } from 'mongoose'
import { IProductObject } from '../../queries/product/types'
import { IUserObject } from '../../queries/user/types'

export interface IShoppingCart {
  user: mongoose.Types.ObjectId | IUserObject
  productsList: {
    product: mongoose.Types.ObjectId | IProductObject
    quantity: number
  }[]
}

const ShoppingCart = new Schema<IShoppingCart>(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    productsList: {
      type: [
        {
          product: { type: mongoose.Types.ObjectId, ref: 'Product' },
          quantity: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'ShoppingCart',
  }
)

const model = mongoose.model<IShoppingCart>('ShoppingCart', ShoppingCart)
export default model
