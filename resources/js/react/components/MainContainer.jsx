import { twMerge } from "tailwind-merge";

export default function MainContainer({ className, children }) {
    return (
        <section
            className={twMerge(
                "w-full max-w-[1670px] mx-auto px-[40px] sm:px-[30px]",
                className
            )}
        >
            {children}
        </section>
    );
}
