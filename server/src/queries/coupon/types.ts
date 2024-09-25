import mongoose from 'mongoose'
import { ICoupon } from '../../models/coupon'

export interface ICouponObject extends ICoupon {
  _id: mongoose.Types.ObjectId
}
