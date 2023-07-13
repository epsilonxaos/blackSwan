import MainContainer from "../components/MainContainer";
import Parrafo from "../components/Parrafo";

import cisne from "../../../img/web/cisne.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black py-[50px] lg:pb-[40px] lg:pt-[130px] text-white">
            <MainContainer className={"px-4"}>
                <div className="lg:flex items-start justify-between">
                    {/* Rutas */}
                    <div className="px-[8vw] sm:px-0">
                        <div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center xl:w-[700px] 2xl:w-[870px]">
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] mr-auto ml-0 lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        Social
                                    </Parrafo>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Instagram
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Facebook
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    LinkedIn
                                                </Parrafo>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] ml-auto mr-0 sm:mx-auto lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        Contacto
                                    </Parrafo>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Correo
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Teléfono
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Google Maps
                                                </Parrafo>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] mr-auto ml-0 sm:mx-auto lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        Divisiones
                                    </Parrafo>
                                    <ul>
                                        <li>
                                            <Link to={"/capital"}>
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Capital
                                                </Parrafo>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/real-state">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Real Estate
                                                </Parrafo>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/hospitality">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Hopitalidad
                                                </Parrafo>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] ml-auto mr-0 lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        Nosotros
                                    </Parrafo>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Historia
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Quienes Somos
                                                </Parrafo>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    Nuestros Valores
                                                </Parrafo>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="px-[8vw] sm:px-0">
                        <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                            Newsletter
                        </Parrafo>
                        <Parrafo className="text-white text-left text-[16px]">
                            Compártenos tu correo
                        </Parrafo>
                    </div>

                    <img
                        src={cisne}
                        alt="Cisne"
                        className="mx-auto my-[65px] lg:my-0 lg:mx-[initial]"
                    />
                </div>

                <div className="w-full lg:flex lg:items-center lg:justify-between lg:pt-[130px]">
                    <Parrafo className="text-white text-[16px] font-normal">
                        © BLACK SWAN, 2023
                    </Parrafo>
                    <Parrafo className="text-white text-[16px] font-normal">
                        Diseño y desarrollo x{" "}
                        <span className="font-bold">MadebyPartners®</span>
                    </Parrafo>
                    <Parrafo className="text-white text-[16px] font-normal">
                        <a href="#">Políticas de privacidad</a>
                    </Parrafo>
                </div>
            </MainContainer>
        </footer>
    );
}
