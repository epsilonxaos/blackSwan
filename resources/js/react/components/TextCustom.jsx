import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

export default function TextCustom({
    className = "",
    children,
    textParse = "",
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.span
            ref={ref}
            className={className}
            style={{
                transform: isInView ? "none" : "translateX(-120px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
        >
            {textParse ? parse(textParse) : children}
        </motion.span>
    );
}
