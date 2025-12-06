import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'

const Slider = ({ children }: any) => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
            perView: "auto",
            spacing: 20,
        },
    })

    return (
        <div ref={ref} className="keen-slider">
            {children}
        </div>
    )
}

export default Slider;