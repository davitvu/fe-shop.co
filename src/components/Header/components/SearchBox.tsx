import { Input } from "@/components/Input/Input";
import { LoaderCircle, Search } from "lucide-react";

type Props = {
    loading: boolean;
}

const SearchBox = ({ loading = false }: Props) => {

    return (
        <div className="relative mx-4 bg-[#F0F0F0] rounded-full">
            <Search className="absolute top-[10px] left-2 w-5 h-5" />
            <Input
                type="text"
                placeholder="Search for products..."
                className={`md:w-[320px] lg:w-[380px] xl:w-[420px] pl-8 h-10 rounded-full border-none outline-none`}
            />
            {loading && (
                <LoaderCircle className="absolute top-[10px] right-3 w-5 h-5 animate-spin" />
            )}
        </div>
    )
}

export default SearchBox;