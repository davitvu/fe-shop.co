import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const HeaderOnly = () => {
    return (
        <>
            <Header />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default HeaderOnly;