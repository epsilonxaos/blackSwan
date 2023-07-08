import { CapitalIcon, Hospitalary, RealStateIcon } from "./Icons";
import MainContainer from "./MainContainer";
import Parrafo from "./Parrafo";

export default function MenuHeader({ active, handlerClose }) {
    return (
        <nav className="w-full fixed top-0 left-0 bg-black text-white h-screen pt-20 pb-6 overflow-hidden md:max-h-[650px]">
            <MainContainer
                className={
                    "overflow-auto h-full flex items-center justify-between md:justify-center flex-col"
                }
            >
                <Parrafo className="text-gris max-w-[300px] md:max-w-[680px] tracking-[-0.54px] opacity-80 mx-auto">
                    Desarrollamos estrategias integrales que permitan que{" "}
                    <span className="underline">lo inesperado</span> sea una
                    realidad en cada uno de nuestros rubros de especialización.
                </Parrafo>

                <ul className="flex w-full max-w-6xl mx-auto items-center justify-center md:justify-around flex-col md:flex-row max-md:gap-10 landscape:py-12 md:py-[120px]">
                    <li>
                        <a href="#">
                            <CapitalIcon className="text-white w-[140px]" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RealStateIcon className="text-white w-[140px]" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Hospitalary className="text-white w-[140px]" />
                        </a>
                    </li>
                </ul>

                <ul className="flex items-center justify-center font-normal text-sm">
                    <li>
                        <a href="#" className="underline">
                            NOSOTROS
                        </a>
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
