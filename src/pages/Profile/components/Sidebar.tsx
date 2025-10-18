import { cn } from "@/lib/utils";
import { profileAction, profileNav } from "../constants";

const Sidebar = ({
    activeTab,
    setActiveTab,
    handleAction
}: {
    activeTab: string;
    setActiveTab: (id: string) => void;
    handleAction: (action: string) => void;
}) => {
    return (
        <div className="bg-white rounded-2xl p-5 min-w-[240px]">
            <div>
                {profileNav.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={cn(
                            'w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors relative',
                            activeTab === item.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                        )}
                    >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="flex-1 text-left">{item.label}</span>
                    </button>
                ))}
            </div>
            <div>
                <div className="mt-4 pt-4 border-t space-y-1">
                    {profileAction.map((item) =>
                        <button
                            key={item.id}
                            onClick={() => handleAction(item.action)}
                            className="w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="flex-1 text-left">{item.label}</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;