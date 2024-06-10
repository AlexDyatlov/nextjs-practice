export function getPageNumbers(currentPage: number, totalPages: number) {
  const pageNumbers = [];

  pageNumbers.push(1);

  if (currentPage > 4) {
    pageNumbers.push('...');
  }

  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (currentPage < totalPages - 3) {
    pageNumbers.push('...');
  }

  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
}
