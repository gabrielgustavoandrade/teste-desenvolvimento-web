import { useMemo } from 'react';

export const DOTS = '...';

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface UsePaginationProps {
  paginationInfo: {
    page: number;
    totalPages: number;
  };
  siblingCount: number
}

export const usePagination = ({
  paginationInfo, siblingCount,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= paginationInfo.totalPages) {
      return range(1, paginationInfo.totalPages);
    }

    const leftSiblingIndex = Math.max(paginationInfo.page - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      paginationInfo.page + siblingCount,
      paginationInfo.totalPages
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < paginationInfo.totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = paginationInfo.totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, paginationInfo.totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        paginationInfo.totalPages - rightItemCount + 1,
        paginationInfo.totalPages
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [paginationInfo, siblingCount]);

  return paginationRange;
};
