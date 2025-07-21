import { useSearchParams } from 'react-router-dom';
import { FC } from 'react';


type PaginationProps = {
  limit: number;
  total: number;
}

export const PaginationComponent:FC<PaginationProps> = ({limit,total}) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  let currentPage = Number(searchParams.get('page') || '1');
let lastPage = Math.ceil(total / limit);
  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={() => {
            setSearchParams({ page: (currentPage - 1).toString() });
          }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 rounded bg-lime-100 p-4 shadow-md"
        >
          Prev
        </button>
      )}


      {currentPage < lastPage && (
        <button
          onClick={() => {
            setSearchParams({ page: (currentPage + 1).toString() });
          }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded bg-lime-100 p-4 shadow-md"
        >
          Next
        </button>
      )}
    </>
  );
};
