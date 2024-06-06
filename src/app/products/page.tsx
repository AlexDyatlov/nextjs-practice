'use client';

import useSWR from 'swr';

import Container from '@/_ui/container';
import Title from '@/_ui/title';
import Message from '@/_ui/message';
import ProductCard from '@/components/ui/ProductCard';

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
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
