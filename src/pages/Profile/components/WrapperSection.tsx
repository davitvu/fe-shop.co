import DialogModal from "@/components/DialogModal/DialogModal";
import { SquarePen, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
    title: string;
    Icon?: LucideIcon;
    titleBtn?: string;
    children: ReactNode;
    onClick?: () => void;
}

const WrapperSection = ({
    title, Icon = SquarePen, titleBtn = 'Update', children = "value empty", onClick
}: Props) => {

    const OpenModal = (
        <div onClick={onClick} className="flex items-center justify-between text-[#D70018] gap-1 cursor-pointer active:scale-95 select-none">
            <Icon className="w-[18px] h-[18px]" />
            <p className="text-[14px]">{titleBtn}</p>
        </div>
    )

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#121214]">{title}</p>
                <DialogModal
                    title={title}
                    trigger={OpenModal}
                >
                    <div onClick={onClick} className="flex items-center justify-between text-[#D70018] gap-1 cursor-pointer active:scale-95 select-none">
                        <Icon className="w-[18px] h-[18px]" />
                        <p className="text-[14px]">{titleBtn}</p>
                    </div>
                </DialogModal>
            </div>
            {children}
        </div>
    )
}

export default WrapperSection;