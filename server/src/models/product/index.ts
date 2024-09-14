import mongoose, { Schema } from 'mongoose'

// categoryType.enum.ts
export enum CategoryTypes {
  shirts = 'shirt',
  footwear = 'footwear',
  jacket = 'jacket',
  denim = 'denim',
  accessories = 'accessories',
  skirts = 'skirt',
}

export enum GenderTypes {
  men = 'men',
  women = 'women',
  unisex = 'unisex',
}

export interface IProduct {
  sku: string
  banner: string
  images: string[]
  title: string
  description: string
  mrp: number
  price: number
  category: string
  gender: string
  originalLink: string
}

const Product = new Schema<IProduct>(
  {
    sku: { type: String, unique: true },
    banner: { type: String, required: true },
    images: { type: [String], required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: Object.values({ ...CategoryTypes }),
      required: true,
    },
    gender: {
      type: String,
      enum: Object.values({ ...GenderTypes }),
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'Product',
  }
)

const model = mongoose.model<IProduct>('Product', Product)
export default model
