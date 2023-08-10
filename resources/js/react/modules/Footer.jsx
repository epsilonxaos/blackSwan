import MainContainer from "../components/MainContainer";
import Parrafo from "../components/Parrafo";
import { AiOutlineArrowRight } from "react-icons/ai";

import cisne from "../../../img/web/cisne.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function Footer() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();
    return (
        <footer
            className="bg-black py-[50px] lg:pb-[40px] lg:pt-[130px] text-white"
            id="footer"
        >
            <MainContainer className={"px-4"}>
                <div className="lg:flex items-start justify-between">
                    {/* Rutas */}
                    <div className="px-[8vw] sm:px-0">
                        <div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-start xl:w-[700px] 2xl:w-[870px]">
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] mr-auto ml-0 lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        Social
                                    </Parrafo>
                                    <ul>
                                        {state.website.social_in && (
                                            <li>
                                                <a
                                                    href={
                                                        state.website.social_in
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        Instagram
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                        {state.website.social_fb && (
                                            <li>
                                                <a
                                                    href={
                                                        state.website.social_fb
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        Facebook
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                        {/* //TODO: No esta en la BD, agregar de ser necesario */}
                                        {false && (
                                            <li>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        LinkedIn
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] ml-auto mr-0 sm:mx-auto lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        {t("contacto")}
                                    </Parrafo>
                                    <ul>
                                        {state.website.correo && (
                                            <li>
                                                <a
                                                    href={
                                                        "mailto:" +
                                                        state.website.correo
                                                    }
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        {t("footer.correo")}
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                        {state.website.telefono && (
                                            <li>
                                                <a
                                                    href={
                                                        "tel:+52" +
                                                        state.website.telefono
                                                    }
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        {t("footer.telefono")}
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                        {state.website.location && (
                                            <li>
                                                <a
                                                    href={
                                                        state.website.location
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Parrafo className="text-white text-left font-normal text-[16px]">
                                                        Google Maps
                                                    </Parrafo>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] mr-auto ml-0 sm:mx-auto lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        {t("footer.divisiones")}
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
                                                    Hospitality
                                                </Parrafo>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1 mb-[75px] lg:mb-0">
                                <div className="w-[140px] ml-auto mr-0 lg:ml-0 lg:mr-auto">
                                    <Parrafo className="text-[#747474] text-left mb-8 text-[16px]">
                                        {t("nosotros")}
                                    </Parrafo>
                                    <ul>
                                        <li>
                                            <Link to="nosotros#historia">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    {t("footer.historia")}
                                                </Parrafo>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="nosotros#quienesSomos">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    {t("footer.quienes")}
                                                </Parrafo>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="nosotros#valores">
                                                <Parrafo className="text-white text-left font-normal text-[16px]">
                                                    {t("footer.valores")}
                                                </Parrafo>
                                            </Link>
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
                        <Parrafo className="text-white text-left text-[16px] mb-[15px]">
                            {t("footer.compartir")}
                        </Parrafo>
                        <div className="flex">
                            <input
                                type="text"
                                id="website-admin"
                                className=" border border-r-0 bg-black outline-none focus:ring-transparent !border-white rounded-l-[14px] text-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-white"
                                placeholder="email@"
                            />
                            <span className="inline-flex items-center px-3 text-sm text-white bg-black rounded-none rounded-r-[14px] border border-l-0 border-gray-300 ">
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>

                    <img
                        src={cisne}
                        alt="Cisne"
                        className="mx-auto my-[65px] lg:my-0 lg:mx-[initial]"
                    />
                </div>

                <div className="w-full lg:flex lg:items-center lg:justify-between lg:pt-[130px]">
                    <Parrafo className="text-white text-[16px] font-normal text-center">
                        © BLACK SWAN, 2023
                    </Parrafo>
                    <Parrafo className="text-white text-[16px] font-normal text-center">
                        {t("footer.desarrollo")} x{" "}
                        <span className="font-bold">MadebyPartners®</span>
                    </Parrafo>
                    <Parrafo className="text-white text-[16px] font-normal text-center">
                        <Link to="/politicas">{t("footer.politicas")}</Link>
                    </Parrafo>
                </div>
            </MainContainer>
        </footer>
    );
}
