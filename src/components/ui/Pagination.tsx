import { preload } from 'swr';
import Link from 'next/link';
import clsx from 'clsx';

import SvgIcon from '@/_ui/svgIcon';

import { fetcher } from '@/api';
import { getPageNumbers } from '@/lib/utils/getPageNumbers';

type Direction = 'prev' | 'next';

interface PaginationProps {
  page: number;
  totalItems: number;
  elementsPage: number;
}

export default function Pagination({ page, totalItems, elementsPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / elementsPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pageNumbers = getPageNumbers(page, totalPages);

  const onHover = (pageNumberOrDirection: number | string | Direction) => {
    let skip: number;
    if (typeof pageNumberOrDirection === 'number') {
      skip = (pageNumberOrDirection - 1) * elementsPage;
    } else {
      skip = pageNumberOrDirection === 'prev' ? (page - 2) * elementsPage : page * elementsPage;
    }

    preload(`products?limit=${elementsPage}&skip=${skip}`, fetcher);
  };

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <Link
          className={clsx('pagination__btn', {
            _disabled: page === 1
          })}
          href={`?page=${prevPage}`}
          tabIndex={page === 1 ? -1 : 0}
          aria-label="Предыдущая страница"
          onMouseEnter={() => onHover('prev')}
        >
          <SvgIcon className="pagination__icon pagination__icon--prev" name="arrow" size="40" aria-hidden="true" />
        </Link>
      </li>
      {pageNumbers.map((pageNumber, index) =>
        pageNumber === '...' ? (
          <li className="pagination__item" key={index}>
            <span className="pagination__dots">...</span>
          </li>
        ) : (
          <li className="pagination__item" key={index}>
            <Link
              className={clsx('pagination__btn', {
                _active: page === pageNumber
              })}
              href={`?page=${pageNumber}`}
              onMouseEnter={() => onHover(pageNumber)}
            >
              {pageNumber}
            </Link>
          </li>
        )
      )}
      <li className="pagination__item">
        <Link
          className={clsx('pagination__btn', {
            _disabled: page === totalPages
          })}
          href={`?page=${nextPage}`}
          tabIndex={page === totalPages ? -1 : 0}
          aria-label="Следующая страница"
          onMouseEnter={() => onHover('next')}
        >
          <SvgIcon className="pagination__icon" name="arrow" size="40" aria-hidden="true" />
        </Link>
      </li>
    </ul>
  );
}
