import { FC } from 'react';
import { IReviews } from '../models/ProductModel.ts';
import { RenderStars} from './RenderStars.tsx';

export const ReviewComponent: FC<IReviews> = ({ rating, comment, date, reviewerName, reviewerEmail }) => {
  return (
    <li className="relative flex flex-col w-full gap-1 text-[10px] text-[#404214] box-border shadow-xl">
      <RenderStars rating={rating}/>
      {/*{rating}перевірила, бо шось дуже цілі*/ }

      <div className="flex justify-between w-full">
        <p>{comment}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>

      <h5 className="text-[8px] italic">
        {reviewerName} <span>{reviewerEmail}</span>
      </h5>
    </li>
  );
};
