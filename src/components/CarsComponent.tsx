import { useEffect, useState } from 'react';
import { getCars } from '../service/api_servise.ts';
import { ICar } from '../models/ICar.ts';
import { CarComponent } from './CarComponent.tsx';
import { useSearchParams } from 'react-router-dom';
import { PaginationComponent } from './PaginationComponent.tsx';

export const CarsComponent = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const currentPage = Number(searchParams.get('page') || '1');

  const carsPerPage = 15;
  const totalPages = Math.ceil(cars.length / carsPerPage);
  const start = (currentPage - 1) * carsPerPage;
  const onePageCars = cars.slice(start, start + carsPerPage);

  useEffect(() => {
    getCars().then((cars) => setCars(cars));
  }, []);

  return (
    <div className="flex justify-center items-center" >
      <ul className="flex flex-wrap  w-[90%] justify-center items-center gap-3">
        {onePageCars.map((car) => (
          <CarComponent key={car.id} car={car} />
        ))}
      </ul>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={(page) => setSearchParams({ page: page.toString() })}
      />

    </div>
  );
};
