import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="mt-[70px]">
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;