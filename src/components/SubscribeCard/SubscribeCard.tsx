import { Mail } from "lucide-react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";

type Subscribe = {
    email: string;
}

const SubscribeCard = () => {
    const { register, handleSubmit, formState: { errors }
} = useForm<Subscribe>({
    defaultValues: {
        email: ""
        }
    })

    const onSubmit = (data: Subscribe) => {
        console.log(data);
    }

    return (
    <div className="flex flex-col items-center justify-between bg-black p-10 rounded-3xl lg:flex-row -translate-y-1/2">
        <h2 className="text-white text-4xl/tight max-w-[600px] font-black mb-7 lg:mb-0">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="w-full md:max-w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full mb-4">
                    <Mail className="absolute top-[10px] left-3" />
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        error={errors.email?.message}
                        className="bg-white text-black rounded-full h-11 pl-11 focus-visible:ring-0 w-full"
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                </div>
                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-full h-11"
                >Subscribe to Newsletter</Button>
            </form>
        </div>
    </div>
    )
}

    export default SubscribeCard;