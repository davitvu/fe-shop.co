import SubscribeCard from "@/components/SubscribeCard/SubscribeCard";
import WrapperContent from "../WrapperContent/WrapperContent";
import { footerNavigation, paymentMethods, socials } from "./constants";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo/Logo";

const Footer = () => {

    return (
        <footer className="bg-[#f0f0f0] mt-[200px]">
            <WrapperContent>
                <SubscribeCard />
                <div className="-mt-25 lg:-mt-10 border-b-2 border-zinc-400 pb-10 flex flex-col lg:flex-row lg:gap-25">
                    <div className="w-full lg:w-[300px]">
                        <Logo className="text-4xl mb-3" />
                        <p className="mb-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="flex gap-3 mb-5">
                            {socials.map((item) => (
                                <div key={item.id} className="flex items-center justify-center w-7 h-7"><Link to={item.href}>{item.icon}</Link></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap gap-7 lg:grow-1">
                        {footerNavigation.map(i => (
                            <div key={i.id}>
                                <p className="text-base/tight tracking-[3px] font-medium pb-3">{i.label}</p>
                                <ul>{i.links.map(o => (
                                    <li key={o.id}><Link to={o.href} className="text-zinc-500 py-2 inline-block hover:underline">{o.label}</Link></li>
                                ))}</ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-1 flex-col md:flex-row md:justify-between">
                    <p className="text-center pt-5 select-none">Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved</p>
                    <div className="flex gap-2 items-center justify-center pt-5 pb-8">
                        {paymentMethods.map(i => (
                            <div key={i.id} className="w-[46px] h-[30px] flex items-center justify-center shadow bg-white rounded-md p-2">{i.icon}</div>
                        ))}
                    </div>
                </div>
            </WrapperContent>
        </footer>
    )
}

export default Footer;