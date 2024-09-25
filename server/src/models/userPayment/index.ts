import mongoose, { Schema } from 'mongoose'
import { IUserObject } from '../../queries/user/types'

export enum PaymentTypes {
  card = 'card',
  upi = 'upi',
  banking = 'banking',
}

export enum CardTypes {
  visa = 'visa',
  mastercard = 'mastercard',
}

export interface Card {
  cardType: string
  number: number
  expiry: string
}

export interface BankingDetails {
  bankName: string
  accountNumber: number
  accountName: string
  IFSCCode: string
}

export interface IUserPayment {
  user: mongoose.Types.ObjectId | IUserObject
  paymentType: string
  cardDetails: Card
  upiId: string
  bankingDetails: BankingDetails
}

const UserPayment = new Schema<IUserPayment>(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    paymentType: {
      type: String,
      enum: Object.values({ ...PaymentTypes }),
      required: true,
    },
    cardDetails: {
      cardType: {
        type: String,
        enum: Object.values({ ...CardTypes }),
        required: true,
      },
      number: Number,
      expiry: String,
    },
    upiId: String,
    bankingDetails: {
      bankName: String,
      accountNumber: Number,
      accountName: String,
      IFSCCode: String,
    },
  },
  {
    timestamps: true,
    collection: 'user_payment',
  }
)

const model = mongoose.model<IUserPayment>('UserPayment', UserPayment)
export default model
