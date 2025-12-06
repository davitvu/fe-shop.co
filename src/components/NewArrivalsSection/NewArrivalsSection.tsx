import { Element } from "react-scroll";
import WrapperContent from "../Layouts/WrapperContent/WrapperContent";
import ProductCard from "../ProductCard/ProductCard";
import ProductSkeleton from "../Skeleton/ProductSkeleton/ProductSkeleton";
import Slider from "../Slider/Slider";

const NewArrivalsSection = ({
    data,
    getProductLoading
}: {
    data: any;
    getProductLoading: boolean;
}) => {
    return (
        <WrapperContent>
            <Element className="my-20" name="newArrivals">
                <h2 className="font-extrabold text-4xl text-center mb-10">NEW ARRIVALS</h2>
                {!getProductLoading ? (
                    <>
                        <Slider>
                            {data.map((item: any) => (
                                <ProductCard
                                    id={item.id}
                                    name={item.name}
                                    slug={item.slug}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </Slider>
                    </>
                ) : (
                    <>
                        <ProductSkeleton />
                    </>
                )}


            </Element>
        </WrapperContent>
    )
}

export default NewArrivalsSection;