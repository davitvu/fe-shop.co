import Header from "../Header/Header";

const HeaderOnly = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="mt-[70px]">
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}

export default HeaderOnly;