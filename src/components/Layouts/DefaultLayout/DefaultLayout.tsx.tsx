import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;