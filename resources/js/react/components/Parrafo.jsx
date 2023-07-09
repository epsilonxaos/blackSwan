import { twMerge } from "tailwind-merge";

export default function Parrafo({ className = "", children }) {
    return (
        <p
            className={twMerge(
                "text-center text-lg text-black tracking-[-0.54px]",
                className
            )}
        >
            {children}
        </p>
    );
}
