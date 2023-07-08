import { twMerge } from "tailwind-merge";

export default function MainContainer({ className, children }) {
    return (
        <section
            className={twMerge(
                "w-full max-w-[1690px] mx-auto px-4 sm:px-[30px]",
                className
            )}
        >
            {children}
        </section>
    );
}
