export type Rating = {
  star: number;
  total: number;
};

export type Product = {
  sku: string;
  banner: string;
  images: string[];
  title: string;
  description: string;
  mrp: number;
  price: number;
  rating: Rating;
};
