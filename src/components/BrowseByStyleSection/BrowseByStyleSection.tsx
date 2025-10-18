import { Link } from "react-router-dom";
import WrapperContent from "../Layouts/WrapperContent/WrapperContent";
import { dressStyles } from "./constants";

const BrowseByStyleSection = () => {
    return (
        <WrapperContent>
            <div className="my-20 bg-[#f0f0f0] rounded-2xl p-10">
                <h2 className="font-extrabold text-4xl text-center mb-10">BROWSE BY DRESS STYLE</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 auto-rows-[200px]">
                    {dressStyles.map((i) => (
                        <Link key={i.id} to={i.href} className={`relative rounded-2xl overflow-hidden lg:row-span-1 lg:col-span-1`}>
                            <p className="absolute left-4 top-4 z-10 text-base sm:text-lg font-semibold text-black">{i.label}</p>
                            <div className="aspect-[16/9] sm:aspect-[5/3] md:aspect-[7/3]">
                                <img
                                    src={i.href}
                                    alt={i.label}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </WrapperContent>
    )
}

export default BrowseByStyleSection;