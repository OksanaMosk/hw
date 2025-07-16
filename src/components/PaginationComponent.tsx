import { FC } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
};

export const PaginationComponent: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setPage,
}) => {
  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={() => setPage(currentPage - 1)}
          className="fixed w-[100px] left-4 top-1/2 -translate-y-1/2 z-50 rounded bg-lime-100 p-4 shadow-md"
        >
          Prev
        </button>
      )}

      {currentPage < totalPages && (
        <button
          onClick={() => setPage(currentPage + 1)}
          className="fixed w-[100px] right-4 top-1/2 -translate-y-1/2 z-50 rounded bg-lime-100 p-4 shadow-md"
        >
          Next
        </button>
      )}
    </>
  );
};
