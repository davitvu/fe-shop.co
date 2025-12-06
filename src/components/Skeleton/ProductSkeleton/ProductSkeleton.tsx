
const ProductSkeleton = ({ length = 5 }: { length?: number }) => {
    return (
        <div className="flex gap-5 overflow-hidden">
            {
                Array.from({ length }).map((_, i) => (
                    <div key={i} className="flex min-w-[250px] sm:min-w-[300px] flex-col gap-4">
                        <div className="skeleton h-[250px] sm:h-[300px] w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductSkeleton;