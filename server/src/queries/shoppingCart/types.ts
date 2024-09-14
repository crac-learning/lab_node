import mongoose from 'mongoose'
import { IShoppingCart } from '../../models/shoppingCart'

export interface IShoppingCartObject extends IShoppingCart {
  _id: mongoose.Types.ObjectId
}
