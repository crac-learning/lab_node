import mongoose, { Schema } from 'mongoose'
import { IUserObject } from '../../queries/user/types'
import { IProductObject } from '../../queries/product/types'
import { IUserPaymentObject } from '../../queries/userPayment/types'
import { IUserAddressObject } from '../../queries/userAddress/types'
import { ICouponObject } from '../../queries/coupon/types'

export enum PaymentStatusTypes {
  declined = 'declined',
  pending = 'pending',
  approved = 'approved',
  refunded = 'refunded',
}

export interface IOrder {
  user: mongoose.Types.ObjectId | IUserObject
  productsList: {
    product: mongoose.Types.ObjectId | IProductObject
    quantity: number
  }[]
  couponUsed: mongoose.Types.ObjectId | ICouponObject
  totalValue: number
  finalValue: number
  paymentMethod: mongoose.Types.ObjectId | IUserPaymentObject
  deliveryAddress: mongoose.Types.ObjectId | IUserAddressObject
  paymentStatus: string
  canceled: boolean
}

const Order = new Schema<IOrder>(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    productsList: {
      type: [
        {
          product: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
          quantity: Number,
        },
      ],
    },
    couponUsed: { type: mongoose.Types.ObjectId, ref: 'Coupon' },
    totalValue: { type: Number, required: true },
    finalValue: { type: Number, required: true },
    paymentMethod: {
      type: mongoose.Types.ObjectId,
      ref: 'UserPayment',
      required: true,
    },
    deliveryAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'UserAddress',
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: Object.values({ ...PaymentStatusTypes }),
      default: 'pending',
    },
    canceled: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'Order',
  }
)

const model = mongoose.model<IOrder>('Order', Order)
export default model
