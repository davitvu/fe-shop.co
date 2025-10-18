import { SwiperSlide } from "swiper/react";
import WrapperContent from "../Layouts/WrapperContent/WrapperContent";
import Slider from "../Slider/Slider";
import { reviews } from "./constants";

const CustomerReviews = () => {
    return (
        <WrapperContent>
            <div className="my-20">
                <h2 className="font-extrabold text-4xl mb-10">OUR HAPPY CUSTOMERS</h2>
                <Slider slidesPerView={3} spaceBetween={20} >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="border rounded-2xl p-3">
                                <p>rate</p>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-zinc-700">{item.comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </WrapperContent>
    )
}

export default CustomerReviews;