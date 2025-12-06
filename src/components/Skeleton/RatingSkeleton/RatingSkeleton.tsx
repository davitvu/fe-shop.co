const RatingSkeleton = ({ length = 5 }: { length?: number }) => {
    return (
        <div className="flex gap-5 overflow-x-hidden px-2">
            {Array.from({ length }).map((_, i) => (
                <div
                    key={i}
                    className="flex min-w-[250px] sm:min-w-[235px] flex-col gap-4 p-2"
                    aria-hidden="true"
                >
                    <div className="relative w-full">
                        <div className="w-full aspect-[4] sm:aspect-[16/9] rounded-lg overflow-hidden skeleton" />
                    </div>
                    <div className="h-4 w-28 rounded bg-gray-200 skeleton" />
                    <div className="h-4 w-full rounded bg-gray-200 skeleton" />
                    <div className="h-4 w-full rounded bg-gray-200 skeleton" />
                </div>
            ))}
        </div>
    )
}

export default RatingSkeleton