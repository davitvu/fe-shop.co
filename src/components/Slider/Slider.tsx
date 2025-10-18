import { Swiper } from "swiper/react";
import "swiper/css";

const Slider = ({ children, slidesPerView, spaceBetween, loop = false }: any) => {

    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop={loop}
            // breakpoints={"{&quot;768&quot;:{&quot;slidesPerView&quot;:2},&quot;1024&quot;:{&quot;slidesPerView&quot;:3}}" as any}
        >
            {children}
        </Swiper>
    )
}

export default Slider;