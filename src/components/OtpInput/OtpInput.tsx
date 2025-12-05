import { OTPInput, type SlotProps } from 'input-otp';
import { cn } from "@/lib/utils";

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative w-10 h-12 text-2xl',
                'flex items-center justify-center',
                'transition-all duration-300 rounded-md border',
                'border-border group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                props.isActive && 'outline-2 outline-accent-foreground',
            )}
        >
            <div className="group-has-[input[data-input-otp-placeholder-shown]]:opacity-20">
                {props.char ?? props.placeholderChar}
            </div>
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    );
}

function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-6 bg-black" />
        </div>
    );
}

type Props = {
    maxLength?: number;
    value: string;
    onChange: (v: string) => void;
    className?: string;
    onlyNumber?: boolean;
};

const OtpInput = ({
    maxLength = 6,
    value,
    onChange,
    className,
    onlyNumber = false,
}: Props) => {
    const handleChange = (v: string) => {
        let next = v;

        // xoá khoảng trắng
        next = next.replace(/\s/g, "");

        if (onlyNumber) {
            next = next.replace(/\D/g, '');
        }

        if (next.length < maxLength) {
            // next = next.slice(0, maxLength);
            next = next;
        }

        onChange(next);
    };

    return (
        <OTPInput
            maxLength={maxLength}
            value={value}
            onChange={handleChange} // ✅ dùng wrapper
            containerClassName={cn(
                'group flex items-center gap-2 has-[:disabled]:opacity-30',
                className
            )}
            render={({ slots }) => (
                <>
                    {slots.map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                    ))}
                </>
            )}
        />
    );
};

export default OtpInput;