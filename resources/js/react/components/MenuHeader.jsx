import { Link } from "react-router-dom";
import { CapitalIcon, Hospitalary, RealStateIcon } from "./Icons";
import MainContainer from "./MainContainer";
import Parrafo from "./Parrafo";

export default function MenuHeader() {
    return (
        <nav className="w-full fixed z-40 top-0 left-0 bg-black text-white h-screen pt-20 pb-6 overflow-hidden md:max-h-[650px]">
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
                        <Link to={"capital"}>
                            <CapitalIcon className="text-white w-[140px]" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"real-state"}>
                            <RealStateIcon className="text-white w-[140px]" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"hospitality"}>
                            <Hospitalary className="text-white w-[140px]" />
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center justify-center font-normal text-sm">
                    <li>
                        <Link to={"nosotros"} className="underline">
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
        </nav>
    );
}
