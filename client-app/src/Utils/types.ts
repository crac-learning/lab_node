export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password?: string;
  profileImage: string;
}

export interface IProductReview {
  product: string;
  user: string;
  review: string;
  rating: number;
}

export interface IProduct {
  _id: string;
  sku: string;
  banner: string;
  images: string[];
  title: string;
  description: string;
  mrp: number;
  price: number;
  category: string;
  gender: string;
  originalLink: string;
  reviews: IProductReview[];
}
