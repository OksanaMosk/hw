import { FC, useEffect, useRef, useState } from 'react';
import { IProductsModel, IReviews } from '../../models/ProductModel';
import './ProductComponent.css';

interface ProductComponentProps {
    product: IProductsModel;
}

// зірочки робила не сама...
const renderStars = (rating: number, container: HTMLElement) => {
    container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '20');
        svg.setAttribute('height', '20');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 .587l3.668 7.568L24 9.75l-6 5.848 1.416 8.582L12 18.897 4.584 24.18 6 15.598 0 9.75l8.332-1.595z');

        const fillAmount = rating - (i - 1);
        if (fillAmount >= 1) path.setAttribute('fill', 'gold');
        else if (fillAmount >= 0.8) path.setAttribute('fill', 'url(#fill80)');
        else if (fillAmount >= 0.5) path.setAttribute('fill', 'url(#fill50)');
        else if (fillAmount >= 0.4) path.setAttribute('fill', 'url(#fill40)');
        else if (fillAmount >= 0.2) path.setAttribute('fill', 'url(#fill20)');
        else path.setAttribute('fill', 'lightgray');

        svg.appendChild(path);
        container.appendChild(svg);
    }
};

const ReviewComponent: FC<IReviews> = ({ rating, comment, date, reviewerName, reviewerEmail }) => {
    const starRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (starRef.current) renderStars(rating, starRef.current);
    }, [rating]);

    return (
        <li className="relative flex flex-col w-full gap-1 text-[10px] text-[#404214] box-border shadow-xl">
            <div ref={starRef} className="flex gap-1"></div>
            <div className="flex justify-between w-full">
                <p>{comment}</p>
                <p>{new Date(date).toLocaleDateString()}</p>
            </div>
            <h5 className="text-[8px] italic">{reviewerName} <span>{reviewerEmail}</span></h5>
        </li>
    );
};

export const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
    const {
        id, title, description, category, price, discountPercentage, rating,
        stock, tags, brand, sku, weight, dimensions, warrantyInformation,
        shippingInformation, availabilityStatus, reviews, returnPolicy,
        minimumOrderQuantity, meta, images, thumbnail
    } = product;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const mainRatingRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);

    useEffect(() => {
        if (!document.getElementById('starGradientDefs')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            defs.setAttribute('id', 'starGradientDefs');
            defs.innerHTML = `
        <defs>
          <linearGradient id="fill80"><stop offset="80%" stop-color="gold"/><stop offset="80%" stop-color="lightgray"/></linearGradient>
          <linearGradient id="fill50"><stop offset="50%" stop-color="gold"/><stop offset="50%" stop-color="lightgray"/></linearGradient>
          <linearGradient id="fill40"><stop offset="40%" stop-color="gold"/><stop offset="40%" stop-color="lightgray"/></linearGradient>
          <linearGradient id="fill20"><stop offset="20%" stop-color="gold"/><stop offset="20%" stop-color="lightgray"/></linearGradient>
        </defs>`;
            document.body.appendChild(defs);
        }
        if (mainRatingRef.current) {
            renderStars(rating, mainRatingRef.current);
        }
    }, [rating]);

    return (
        <li className="relative flex flex-col justify-between w-[600px] gap-0 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#bab977] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
            <p className="flex justify-end italic text-[10px]">ID: {id}</p>

            <div className="flex justify-between w-full">
                <h3 className="font-bold text-l text-[#bf550d]">{title}<span className="italic"> (Brand: {brand})</span></h3>
                <div ref={mainRatingRef} className="flex gap-1" />
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
