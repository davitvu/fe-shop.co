import { cn } from "@/lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

const Input = ({ className, type, label, error, id, ...props }: InputProps) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = inputId ? `${inputId}-error` : undefined;

    return (
        <>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                aria-invalid={!!error || undefined}
                aria-describedby={error ? errorId : undefined}
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    className
                )}
                {...props}
            />
            {error && (
                <p id={errorId} className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </>
    )
}

export { Input }