'use client';

import useSWR from 'swr';
import Image from 'next/image';

import Container from '@/_ui/container';
import Title from '@/_ui/title';
import Message from '@/_ui/message';

import { IProductsResponse } from '@/types/types';

export default function ProductsPage() {
  const { data, error, isLoading } = useSWR<IProductsResponse>('products');

  if (error) {
    return (
      <Container>
        <Message text="Произошла ошибка" status="error" />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }

  return (
    <Container>
      <Title className="h1--m-bottom" tag="h1">
        Продукты на сайте
      </Title>
      <Title className="h2--m-bottom" tag="h2">
        Все продукты
      </Title>

      <ul className="products">
        {data?.products.map(item => (
          <li className="products__item" key={item.id}>
            <div className="product">
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
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
