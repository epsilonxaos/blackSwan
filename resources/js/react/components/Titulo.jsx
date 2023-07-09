import { twMerge } from "tailwind-merge";

export default function Titulo({ className = "", children }) {
    return (
        <h2
            className={twMerge(
                "text-[32px] md:text-[40px] tracking-[-0.96px] leading-[1.05] font-medium text-center mb-[30px]",
                className
            )}
        >
            {children}
        </h2>
    );
}
