import type { InfoUserRequest } from "@/types";
import { useForm } from "react-hook-form";
import WrapperSection from "../components/WrapperSection";
import { useAuth } from "@/context/AuthContext";
import { Plus } from "lucide-react";
import PreviewLine from "../components/PreviewLine";

const PersonalInfo = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<InfoUserRequest>({
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
        }
    });

    const submit = (data: InfoUserRequest) => {

    }

    return (
        <div className="flex flex-col gap-2">
            <div className="bg-white rounded-2xl p-5">
                <WrapperSection
                    title="Personal information"
                >
                    <div className="flex flex-col justify-between gap-0 sm:flex-row sm:gap-10 sm:divide-y sm:divide-[#e4e4e7]">
                        <div className="w-1/2 divide-y divide-[#e4e4e7]">
                            <PreviewLine
                                label="ID"
                                value={user?.id!}
                            />
                            <PreviewLine
                                label="Fullname"
                                value={`${user?.firstName} ${user?.lastName}`}
                            />
                            <PreviewLine
                                label="Email"
                                value={user?.email!}
                            />
                        </div>
                        <div className="w-1/2 divide-y divide-[#e4e4e7]">
                            <PreviewLine
                                label="Phone"
                                value={user?.phone!}
                            />
                            <PreviewLine
                                label="Address default:"
                                value={"số 10 ngách 12 ngõ 20 Le Quang Dao, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội"}
                            />
                        </div>
                    </div>
                </WrapperSection>
            </div>

            <div className="bg-white rounded-2xl p-5">
                <WrapperSection
                    title="Address"
                    Icon={Plus}
                    titleBtn="Add address"
                >
                    no value
                </WrapperSection>
            </div>

            <div className="bg-white rounded-2xl p-5">
                <WrapperSection
                    title="Passsword"
                    titleBtn="Change password"
                >
                    <PreviewLine
                        label="Last updated at:"
                        value={user?.updatedAt!}
                    />
                </WrapperSection>
            </div>
        </div>
    )
}

export default PersonalInfo;