
type Props = {
    label: string;
    value: string;
}

const PreviewLine = ({
    label = 'No value', value = 'No value'
}: Props) => {
    return (
        <div className="flex items-center justify-between py-4 text-[14px] w-full">
            <p className="text-[#71717A] text-left">{label}</p>
            <p className="text-[#1d1d20] font-medium text-right">{value}</p>
        </div>
    )
}

export default PreviewLine;