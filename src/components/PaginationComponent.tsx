import { useSearchParams } from 'react-router-dom';

export const PaginationComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  let currentPage = Number(searchParams.get('page') || '1');

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
      {/*Не могла обробити, щоб запити наперед знали, чи буде наступна порція через infinity,*/}
      {/*кнопка некст щезала тільки на 8 сторінці, тому повидаляла total limit і вліпила з нервів 7*/}

      {currentPage < 7 && (
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
