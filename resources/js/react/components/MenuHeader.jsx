import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";
import Parrafo from "./Parrafo";
import { motion } from "framer-motion";

import logo1 from "../../../img/web/capital.svg";
import logo2 from "../../../img/web/realState.svg";
import logo3 from "../../../img/web/hospitality.svg";
import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";
import { useTranslation } from "react-i18next";
import AppContext from "../context/AppContext";

export default function MenuHeader() {
    const { state } = useContext(AppContext);
    const { active, setActive } = useContext(HeaderContext);
    const { t, i18n } = useTranslation();
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.4,
            },
        },
    };

    const itemA = {
        hidden: { scale: 0, top: 100 },
        show: { scale: 1, top: 30 },
    };
    const itemB = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, type: "tween" },
            }}
            exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.3 },
            }}
            className="w-full fixed z-40 top-0 left-0 bg-black text-white h-full pt-20 pb-6 overflow-hidden md:h-auto"
        >
            <MainContainer
                className={
                    "overflow-auto h-full flex items-center justify-between md:justify-center flex-col py-[30px] md:pt-[70px] :pb-[100px]"
                }
            >
                <Parrafo
                    className="text-gris max-w-[300px] md:max-w-[680px] opacity-80 mx-auto"
                    textParse={state.textsi18n[i18n.language].header_info}
                />

                <motion.ul
                    variants={container}
                    initial={!active ? "show" : "hidden"}
                    animate={active ? "show" : "hidden"}
                    className="flex w-full max-w-6xl mx-auto items-center justify-center md:justify-around flex-col md:flex-row max-md:gap-8 landscape:py-12 py-[30px] md:py-[120px]"
                >
                    <motion.li variants={itemA}>
                        <Link
                            onClick={() => setActive(false)}
                            to={"real-state"}
                        >
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo2}
                                alt="Real Estate"
                            />
                        </Link>
                    </motion.li>
                    <motion.li variants={itemA}>
                        <Link onClick={() => setActive(false)} to={"capital"}>
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo1}
                                alt="Capital"
                            />
                        </Link>
                    </motion.li>
                    <motion.li variants={itemA}>
                        <Link
                            onClick={() => setActive(false)}
                            to={"hospitality"}
                        >
                            <img
                                className="w-[140px] h-[90px]"
                                src={logo3}
                                alt="Hospitality"
                            />
                        </Link>
                    </motion.li>
                </motion.ul>

                <motion.ul
                    variants={container}
                    initial={!active ? "show" : "hidden"}
                    animate={active ? "show" : "hidden"}
                    className="flex items-center justify-center font-normal text-sm"
                >
                    <motion.li variants={itemB}>
                        <Link
                            onClick={() => setActive(false)}
                            to={"nosotros"}
                            className="underline uppercase"
                        >
                            {t("nosotros")}
                        </Link>
                    </motion.li>
                    <li className="px-1">/</li>
                    <motion.li
                        variants={itemB}
                        onClick={() => setActive(false)}
                    >
                        <a href="#footer" className="opacity-60 uppercase">
                            {t("contacto")}
                        </a>
                    </motion.li>
                </motion.ul>
            </MainContainer>
        </motion.nav>
    );
}
