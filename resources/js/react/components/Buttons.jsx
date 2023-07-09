import { twMerge } from "tailwind-merge";

export default function Boton({ className = "", type = "button", children }) {
    return (
        <button
            className={twMerge(
                "py-[6px] px-[20px] transition-colors border-2 border-black bg-white hover:bg-black hover:text-white rounded-[22px] text-[20px] font-medium tracking-[-0.6px]",
                className
            )}
            type={type}
        >
            {children}
        </button>
    );
}
