import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  images: string[];      
  price?: number;   
};

const ProductCard = ({ id, images, name, price }: Product) => {

    return (
        <div className="w-[250px] sm:w-[300px]">
            <Link to={`/shop/${id}`}><img src={images[0]} alt={name} className="min-w-[250px] sm:min-w-[300px] h-[250px] sm:h-[300px] rounded-xl object-cover"/></Link>
            <div>
                <p className="text-sm md:text-base font-medium line-clamp-1"><Link to={`/shop/${id}`}>{name}</Link></p>
                <p className="mt-1 text-xs md:text-sm text-gray-600">4.5/5</p>
                <p className="mt-1 text-sm md:text-base font-semibold">${price}</p>
            </div>
        </div>
    )
}

export default ProductCard;