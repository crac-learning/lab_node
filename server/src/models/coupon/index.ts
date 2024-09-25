import mongoose, { Schema } from 'mongoose'

export enum OfferTypes {
  fixed = 'fixed',
  percent = 'percent',
}

export interface ICoupon {
  title: string
  code: string
  limited: boolean
  offerType: string
  offerValue: number
  minCartValue: number
  expired: boolean
}

const Coupon = new Schema<ICoupon>(
  {
    title: { type: String, required: true },
    code: { type: String, required: true },
    limited: { type: Boolean, required: true },
    offerType: {
      type: String,
      enum: Object.values({ ...OfferTypes }),
      required: true,
    },
    offerValue: { type: Number, required: true },
    minCartValue: { type: Number },
    expired: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    collection: 'Coupon',
  }
)

const model = mongoose.model<ICoupon>('Coupon', Coupon)
export default model
