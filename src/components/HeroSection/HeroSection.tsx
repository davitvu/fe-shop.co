import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import WrapperContent from "../Layouts/WrapperContent/WrapperContent";
import { heroSectionData } from "./constant";

const HeroSection = () => {
    return (
        <div className="bg-[#f2f0f1]">
            <WrapperContent>
                <div className="w-full pt-10 lg:p-0 lg:h-[663px] lg:shrink-0 flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-1/2 my-auto">
                        <h2 className="section-title text-6xl!">{heroSectionData.title}</h2>
                        <p className="text-zinc-400 my-8">{heroSectionData.description}</p>
                        <Link to={'/shop'}>
                            <Button className="w-full lg:w-[210px] mb-10">Shop Now</Button>
                        </Link>
                        <div className="flex flex-wrap gap-10 lg:gap-x-20 lg:gap-y-10 justify-center lg:text-left text-center mx-auto">
                            <div>
                                <p className="text-3xl font-bold">200+</p>
                                <p className="text-zinc-400">International Brands</p>
                            </div>
                            <div className="sm:border-l md:border-r lg:border-none px-10 lg:px-0">
                                <p className="text-3xl font-bold">2,000+</p>
                                <p className="text-zinc-400">High-Quality Products</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">30,000+</p>
                                <p className="text-zinc-400">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-10 lg:p-0 lg:w-1/2">
                        <svg className="absolute top-60 left-0 2xl:left-30" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z" fill="black" />
                        </svg>
                        <svg className="absolute top-20 right-0 2xl:right-30" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black" />
                        </svg>
                        <img src="/images/hero-image.svg" alt="" className="w-full h-full" />
                    </div>
                </div>
            </WrapperContent>
        </div>
    )
}

export default HeroSection;