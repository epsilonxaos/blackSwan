import MainContainer from "../components/MainContainer";

import logo from "../../../img/web/logo.svg";
import MenuHeader from "../components/MenuHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function Header() {
    const [active, setActive] = useState(false);

    return (
        <>
            <header className="bg-black text-white w-full fixed z-50 top-0 left-0">
                <MainContainer className="px-4 flex items-center justify-between min-h-[64px]">
                    <ul className="flex items-center justify-center font-normal text-sm">
                        <li>
                            <a href="#" className="underline font-bold">
                                ES
                            </a>
                        </li>
                        <li className="px-1">/</li>
                        <li>
                            <a href="#" className="opacity-60">
                                EN
                            </a>
                        </li>
                    </ul>

                    <Link to={"/"} className="w-[180px] sm:w-[280px]">
                        <img
                            src={logo}
                            alt="Black Swan logo"
                            className="max-w-[180px] sm:max-w-[280px]"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setActive(!active)}
                        className="transition-colors border border-white rounded-lg py-[2px] px-[8px] bg-black hover:bg-white hover:text-black text-xs sm:text-sm"
                    >
                        Menú
                    </button>
                </MainContainer>
            </header>

            {active && (
                <div className="backdrop-blur-sm bg-black bg-opacity-50 z-30 fixed top-0 left-0 h-screen w-screen"></div>
            )}

            <AnimatePresence mode="wait">
                {active && (
                    <MenuHeader
                        active={active}
                        handlerClose={() => setActive(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
