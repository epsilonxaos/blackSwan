import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

export default function TextCustom2({
    className = "",
    children,
    delay = 1,
    textParse = "",
}) {
    const [parsedHtml, setParsedHtml] = useState(false);

    useEffect(() => {
        if (textParse) setParsedHtml(parse(textParse));
        else setParsedHtml("");
    }, [textParse]);

    try {
        return (
            <AnimatePresence>
                {parsedHtml && parsedHtml.length ? (
                    <>
                        {parsedHtml.map((element, index) => (
                            <IndivudualText
                                key={"text-" + generateRandomId(5)}
                                index={index}
                                className={className}
                            >
                                {element}
                            </IndivudualText>
                        ))}
                    </>
                ) : (
                    <IndivudualText index={delay} className={className}>
                        {children}
                    </IndivudualText>
                )}
            </AnimatePresence>
        );
    } catch (error) {
        console.log(">>> Error generado por el texto");
        console.log(textParse);
        console.log(parsedHtml);
        console.log(error);
    }
}

function generateRandomId(size = 4) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }

    return id;
}

function IndivudualText({ children, index = 1, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animations = {
        on: {
            initial: {
                opacity: 0,
                y: -20,
            },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
        },
        off: {
            initial: {
                opacity: 0,
                y: -20,
            },
            animate: { opacity: 0, y: -10 },
            exit: { opacity: 0, y: 0 },
        },
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            initial={isInView ? animations.on.initial : animations.off.initial}
            animate={isInView ? animations.on.animate : animations.off.animate}
            exit={isInView ? animations.on.exit : animations.off.exit}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {children}
        </motion.div>
    );
}
