'use client';

import useSWR from 'swr';
import Image from 'next/image';

import Container from '@/_ui/container';
import Message from '@/_ui/message';

export default function ProductPage({ params: { id } }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR(`products/${id}`);

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
      <article className="detail-product">
        <picture className="detail-product__pic">
          <Image
            className="detail-product__img"
            src={data.images[0]}
            width={297}
            height={167}
            alt={`Продукт ${data.title}`}
            priority
          />
        </picture>
        <div className="detail-product__about">
          <h1 className="detail-product__title">{data.title}</h1>
          <p className="detail-product__brand">{data.brand}</p>
          <p className="detail-product__price">{data.price}$</p>
          <p className="detail-product__category">Категория: {data.category}</p>
          <p className="detail-product__descr">{data.description}</p>
        </div>
      </article>
    </Container>
  );
}
