import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

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