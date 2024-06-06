import { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';

import { fetcher } from '@/api';
import { IProduct } from '@/types/types';

interface ProductCardProps {
  item: IProduct;
}

export default function ProductCard({ item }: ProductCardProps) {
  const onHover = () => {
    preload(`/products/${item.id}`, fetcher);
  };

  return (
    <Link className="product" href={`/products/${item.id}`} onMouseEnter={onHover}>
      <h3 className="product__name">{item.title}</h3>
      <p className="product__descr">{item.description}</p>
      <p className="product__price">
        Цена: <span className="product__value">{item.price}$</span>
      </p>
      <picture className="product__pic">
        <Image
          className="product__img"
          src={item.images[0]}
          width={297}
          height={167}
          alt={`Продукт ${item.title}`}
          priority
        />
      </picture>
    </Link>
  );
}
