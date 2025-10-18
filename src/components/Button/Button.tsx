// components/ui/button.tsx
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
};

export function Button({
  className,
  variant = "primary",
  loading = false,
  disabled,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const buttonClass = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl w-full h-12 text-sm font-medium cursor-pointer transition-all active:scale-95 transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive˝",
    variant === "primary" && "bg-black text-white hover:opacity-70",
    variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    variant === "outline" && "bg-white text-black border border-black",
    className
  );

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Circle className="animate-spin"/>
      )}
      {children}
    </button>
  );
}
