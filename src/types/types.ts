export interface IProduct {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

export interface IProductsResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
