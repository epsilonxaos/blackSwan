import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

export default function Parrafo({
    className = "",
    children = null,
    textParse = "",
}) {
    return (
        <p
            className={twMerge(
                "text-center text-lg text-black tracking-[-0.54px] leading-[1.2]",
                className
            )}
        >
            {textParse ? parse(textParse) : children}
        </p>
    );
}
