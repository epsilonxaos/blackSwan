import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";
import Parrafo from "./Parrafo";
import { motion } from "framer-motion";

import logo1 from "../../../img/web/capital.svg";
import logo2 from "../../../img/web/realState.svg";
import logo3 from "../../../img/web/hospitality.svg";

export default function MenuHeader({ active, handlerClose }) {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, type: "tween" },
            }}
            // exit={{
            //     opacity: 0,
            //     y: -20,
            //     transition: { duration: 0.3 },
            // }}
            className="w-full fixed z-40 top-0 left-0 bg-black text-white h-screen pt-20 pb-6 overflow-hidden md:max-h-[650px]"
        >
            <MainContainer
                className={
                    "overflow-auto h-full flex items-center justify-between md:justify-center flex-col"
                }
            >
                <Parrafo className="text-gris max-w-[300px] md:max-w-[680px] opacity-80 mx-auto">
                    Desarrollamos estrategias integrales que permitan que{" "}
                    <span className="underline">lo inesperado</span> sea una
                    realidad en cada uno de nuestros rubros de especialización.
                </Parrafo>

                <ul className="flex w-full max-w-6xl mx-auto items-center justify-center md:justify-around flex-col md:flex-row max-md:gap-10 landscape:py-12 md:py-[120px]">
                    <li>
                        <Link onClick={handlerClose} to={"capital"}>
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo1}
                                alt="Capital"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handlerClose} to={"real-state"}>
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo2}
                                alt="Real Estate"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handlerClose} to={"hospitality"}>
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo3}
                                alt="Hospitality"
                            />
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center justify-center font-normal text-sm">
                    <li>
                        <Link
                            onClick={handlerClose}
                            to={"nosotros"}
                            className="underline"
                        >
                            NOSOTROS
                        </Link>
                    </li>
                    <li className="px-1">/</li>
                    <li>
                        <a href="#" className="opacity-60">
                            CONTACTO
                        </a>
                    </li>
                </ul>
            </MainContainer>
        </motion.nav>
    );
}
