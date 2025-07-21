import { FC,useState } from 'react';
import { IProductsModel } from '../../models/ProductModel';
import './ProductComponent.css';
import { ReviewComponent } from '../ReviewComponent.tsx';
import { RenderStars } from '../RenderStars.tsx';

interface ProductComponentProps {
    product: IProductsModel;
}

export const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
    const {
        id, title, description, category, price, discountPercentage, rating,
        stock, tags, brand, sku, weight, dimensions, warrantyInformation,
        shippingInformation, availabilityStatus, reviews, returnPolicy,
        minimumOrderQuantity, meta, images, thumbnail
    } = product;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);


    return (
        <li className="relative flex flex-col justify-between w-[600px] gap-0 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#bab977] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
            <p className="flex justify-end italic text-[10px]">ID: {id}</p>

            <div className="flex justify-between w-full">
                <h3 className="font-bold text-l text-[#bf550d]">{title}<span className="italic"> (Brand: {brand})</span></h3>
              <RenderStars rating={rating}/>
              {/*{rating}перевірила*/ }
            </div>

            <div className="flex justify-between w-full">
                <div>
                    <p className="text-[10px]">Created: {new Date(meta.createdAt).toLocaleDateString()}</p>
                    <p className="text-[10px]">Updated: {new Date(meta.updatedAt).toLocaleDateString()}</p>
                    <p className="text-[10px]">Barcode: {meta.barcode}</p>
                </div>
                <div className="flex flex-col justify-end italic text-xs">
                    <p>{availabilityStatus}</p>
                    <p>Stock: {stock}</p>
                    <p>Category: {category}</p>
                    <p>Tags: "{tags.join('", "')}"</p>
                </div>
            </div>

            <div className="flex justify-between w-full">
                <img className="imgHero" src={thumbnail} alt={title} />
                <img src={meta.qrCode} alt="QR code" width={100} style={{ height: 'auto', objectFit: 'contain' }} />
            </div>

            <div className="text-[#bf550d] font-bold">
                <p className="text-l">Price: {price}</p>
                <p className="text-[10px]">🔥 Discount: {discountPercentage}%</p>
            </div>

            <p className="text-[12px]">{description}</p>

            <div className="flex gap-20 w-full my-2 border-t-white border-t-[3px]">
                <div className="relative w-1/2 flex justify-center items-center mt-2">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 px-3 py-1 bg-[#bab977] text-white rounded-l hover:bg-[#9a974f]"
                    >
                        ‹
                    </button>

                    <img
                        src={images[currentImageIndex]}
                        alt={title}
                        className="w-[100px] h-auto object-contain rounded shadow-lg"
                    />

                    <button
                        onClick={handleNext}
                        className="absolute right-0 px-3 py-1 bg-[#bab977] text-white rounded-r hover:bg-[#9a974f]"
                    >
                        ›
                    </button>
                </div>

                <div className="text-[10px] italic my-2">
                    <p>{weight} lb</p>
                    <p>W {dimensions.width} cm x H {dimensions.height} cm x D {dimensions.depth} cm</p>
                    <p>{warrantyInformation}</p>
                    <p>{shippingInformation}</p>
                    <p>{returnPolicy}</p>
                    <p>Minimum order quantity: {minimumOrderQuantity} pcs</p>
                </div>
            </div>

            <h5 className="text-[12px]">Reviewers 👇</h5>
            <ul className="flex flex-col w-1/2 gap-1 text-[10px]">
                {reviews.map((review, index) => (
                    <ReviewComponent key={index} {...review} />

                ))}
            </ul>

            <p className="flex justify-end text-[8px]">SKU: {sku}</p>
        </li>
    );
};
