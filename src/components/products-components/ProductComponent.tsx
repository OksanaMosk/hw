import { FC,  useState } from 'react';
import { IProduct, IReviews } from '../../models/IProduct.ts';

type ProductProps = {
  product: IProduct;
};

const Star: FC<{ fillPercent: number }> = ({ fillPercent }) => {
  const fillColor =
    fillPercent >= 1 ? 'gold' :
      fillPercent >= 0.8 ? 'url(#fill80)' :
        fillPercent >= 0.5 ? 'url(#fill50)' :
          fillPercent >= 0.4 ? 'url(#fill40)' :
            fillPercent >= 0.2 ? 'url(#fill20)' :
              'lightgray';

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fill80">
          <stop offset="80%" stopColor="gold" />
          <stop offset="80%" stopColor="lightgray" />
        </linearGradient>
        <linearGradient id="fill50">
          <stop offset="50%" stopColor="gold" />
          <stop offset="50%" stopColor="lightgray" />
        </linearGradient>
        <linearGradient id="fill40">
          <stop offset="40%" stopColor="gold" />
          <stop offset="40%" stopColor="lightgray" />
        </linearGradient>
        <linearGradient id="fill20">
          <stop offset="20%" stopColor="gold" />
          <stop offset="20%" stopColor="lightgray" />
        </linearGradient>
      </defs>
      <path
        d="M12 .587l3.668 7.568L24 9.75l-6 5.848 1.416 8.582L12 18.897 4.584 24.18 6 15.598 0 9.75l8.332-1.595z"
        fill={fillColor}
      />
    </svg>
  );
};

const StarsRating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} fillPercent={rating - (i - 1)} />
      ))}
    </div>
  );
};

const ReviewComponent: FC<IReviews> = ({
                                         rating,
                                         comment,
                                         date,
                                         reviewerName,
                                         reviewerEmail,
                                       }) => (
  <li className="relative flex flex-col w-full gap-1 text-[10px] text-[#404214] box-border shadow-xl p-2 rounded">
    <StarsRating rating={rating} />
    <div className="flex justify-between w-full">
      <p>{comment}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
    <h5 className="text-[8px] italic">
      {reviewerName} <span>{reviewerEmail}</span>
    </h5>
  </li>
);

export const ProductComponent: FC<ProductProps> = ({ product }) => {
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    minimumOrderQuantity,
    meta,
    images,
    thumbnail,
  } = product;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);

  return (
    <li className="relative flex flex-col justify-between w-[600px] gap-2 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#bab977] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
      <p className="flex justify-end italic text-[10px]">ID: {id}</p>

      <div className="flex justify-between w-full">
        <h3 className="font-bold text-lg text-[#bf550d]">
          {title} <span className="italic">(Brand: {brand})</span>
        </h3>
        <StarsRating rating={rating} />
      </div>

      <div className="flex justify-between w-full text-[10px]">
        <div>
          <p>Created: {new Date(meta.createdAt).toLocaleDateString()}</p>
          <p>Updated: {new Date(meta.updatedAt).toLocaleDateString()}</p>
          <p>Barcode: {meta.barcode}</p>
        </div>
        <div className="flex flex-col justify-end italic text-xs">
          <p>{availabilityStatus}</p>
          <p>Stock: {stock}</p>
          <p>Category: {category}</p>
          <p>Tags: "{tags.join('", "')}"</p>
        </div>
      </div>

      <div className="flex justify-between w-full gap-4 mt-2">
        <img
          className="imgHero max-w-[200px] object-contain rounded shadow-lg"
          src={thumbnail}
          alt={title}
        />
        <img
          src={meta.qrCode}
          alt="QR code"
          width={100}
          style={{ height: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div className="text-[#bf550d] font-bold my-2">
        <p className="text-lg">Price: ${price.toFixed(2)}</p>
        <p className="text-[10px]">🔥 Discount: {discountPercentage}%</p>
      </div>

      <p className="text-[12px]">{description}</p>

      <div className="flex gap-20 w-full my-4 border-t-white border-t-[3px] pt-2">
        <div className="relative w-1/2 flex justify-center items-center mt-2">
          <button
            onClick={handlePrev}
            className="absolute left-0 px-3 py-1 bg-[#bab977] text-white rounded-l hover:bg-[#9a974f]"
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`${title} - image ${currentImageIndex + 1}`}
            className="w-[100px] h-auto object-contain rounded shadow-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-0 px-3 py-1 bg-[#bab977] text-white rounded-r hover:bg-[#9a974f]"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="text-[10px] italic my-2 max-w-[250px]">
          <p>{weight} lb</p>
          <p>
            W {dimensions.width} cm x H {dimensions.height} cm x D{' '}
            {dimensions.depth} cm
          </p>
          <p>{warrantyInformation}</p>
          <p>{shippingInformation}</p>
          <p>{returnPolicy}</p>
          <p>Minimum order quantity: {minimumOrderQuantity} pcs</p>
        </div>
      </div>

      <h5 className="text-[12px] mb-2">Reviewers 👇</h5>
      <ul className="flex flex-col w-1/2 gap-1 text-[10px]">
        {reviews.map((review, index) => (
          <ReviewComponent key={index} {...review} />
        ))}
      </ul>

      <p className="flex justify-end text-[8px] mt-4">SKU: {sku}</p>
    </li>
  );
};
