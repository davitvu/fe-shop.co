import WrapperContent from "../Layouts/WrapperContent/WrapperContent";
import ProductCard from "../ProductCard/ProductCard";
import ProductSkeleton from "../Skeleton/ProductSkeleton/ProductSkeleton";

const TopSellingSection = ({
    data,
    productLoading
}: {
    data: any;
    productLoading: boolean;
}) => {

    return (
        <WrapperContent>
            <div className="my-20">
                <h2 className="font-extrabold text-4xl text-center mb-10">TOP SELLING</h2>
                {!productLoading ? (
                    <>
                        <div className="overflow-x-scroll flex gap-5">
                            {data.map((item: any) => (
                                <ProductCard
                                    id={item.id}
                                    images={item.images}
                                    name={item.name}
                                    price={item.price}
                                />
                            ))}
                        </div>
                        {/* <Slider slidesPerView={5} spaceBetween={20} >
                            {data.map((item: any) => (
                                <SwiperSlide key={item.id}>
                                    <ProductCard
                                        id={item.id}
                                        images={item.images}
                                        name={item.name}
                                        price={item.price}
                                    />
                                </SwiperSlide>
                            ))}
                        </Slider> */}
                    </>
                ) : (
                    <>
                        <ProductSkeleton />
                    </>
                )}
            </div>
        </WrapperContent>
    )
}

export default TopSellingSection;