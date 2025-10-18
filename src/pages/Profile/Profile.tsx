import WrapperContent from "@/components/Layouts/WrapperContent/WrapperContent"
import { useAuth } from "@/context/AuthContext"
import Info from "./components/Info";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { profileNav } from "./constants";

const Profile = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState(profileNav[0].id);
    const activeItem = profileNav.find(item => item.id === activeTab);
    const handleAction = (action: string) => {
        if (action === 'logout') logout();
    }

    return (
        <div className="bg-[#e4e4e7] py-5 h-screen">
            <WrapperContent>
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-2xl">
                        <Info user={user!} />
                    </div>

                    <div className="">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Sidebar */}
                            <Sidebar
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                handleAction={handleAction}
                            />

                            {/* Main */}
                            <Main
                                ActiveComponent={activeItem?.component}
                            />
                        </div>
                    </div>
                </div>
            </WrapperContent>

        </div>
    )
}

export default Profile