import MainContainer from "../components/MainContainer";
import Parrafo from "../components/Parrafo";
import Titulo from "../components/Titulo";
// import { Tabs } from "flowbite-react";
import Tabs from "../components/Tabs";
import { LiaRegistered } from "react-icons/lia";

import frasePrincipal from "../../../img/web/frase-principal.svg";
import frasePrincipalDesk from "../../../img/web/frase-principal-desk.svg";
import cisnePrincipal from "../../../img/web/cisne-banner.svg";

import bSngr from "../../../img/web/blackswan-ngr.svg";
import capital from "../../../img/web/recursos-oscuros/capital.svg";
import onlyCapital from "../../../img/web/recursos-oscuros/onlyCapital.svg";
import real from "../../../img/web/recursos-oscuros/real.svg";
import onlyReal from "../../../img/web/recursos-oscuros/onlyReal.svg";
import hospitality from "../../../img/web/recursos-oscuros/hospitality.svg";
import onlyHospitality from "../../../img/web/recursos-oscuros/onlyHospitality.svg";
import IMGcapital from "../../../img/web/capital.png";
import IMGreal from "../../../img/web/real.png";
import IMGhospitality from "../../../img/web/hospitality.png";
import Boton from "../components/Buttons";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";

export default function Home() {
    const [defaultTab, setDefaultTab] = useState("tabCapital");
    const { t, i18n } = useTranslation();

    return (
        <main>
            {/* Banner principal */}
            <div className="bg-[#CCCCCD]">
                <MainContainer className={" pt-[55px] pb-[35px] px-0"}>
                    <div className="flex flex-col lg:flex-row justify-between sm:justify-start lg:justify-between h-full">
                        <div className="w-full">
                            <img
                                className="lg:hidden w-[80%] max-w-[320px] sm:max-w-[520px] mx-auto sm:ml-0"
                                src={frasePrincipal}
                                alt="Hacemos que suceda lo inesperado"
                            />
                            <img
                                className="hidden lg:block w-[95%]"
                                src={frasePrincipalDesk}
                                alt="Hacemos que suceda lo inesperado"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                className="relative w-[90%] lg:w-full max-w-[320px] sm:max-w-[380px] lg:max-w-max sm:-top-[50px] sm:-right-[30px] lg:top-0  ml-auto mx-0"
                                src={cisnePrincipal}
                                alt="Cisne negro"
                            />
                        </div>
                    </div>
                </MainContainer>
            </div>

            {/* Black Swan */}
            <MainContainer className={"py-[65px] md:py-[100px]"}>
                <img
                    src={bSngr}
                    alt="Black Swan"
                    className="mx-auto mb-[60px] md:mb-[70px]"
                />
                <div className="flex justify-center mb-[30px] md:mb-[70px]">
                    <div className="w-full md:w-5/6 max-w-[1250px]">
                        <Parrafo
                            className="text-justify mb-[30px]"
                            textParse={t("home.infoInicial.0")}
                        />
                        <Parrafo
                            className="text-justify mb-[30px]"
                            textParse={t("home.infoInicial.1")}
                        />
                        <Parrafo
                            className="text-justify mb-[30px]"
                            textParse={t("home.infoInicial.2")}
                        />
                    </div>
                </div>

                <ul className="flex flex-col md:flex-row items-center justify-center">
                    <li className="mb-[95px] md:mb-0 md:mr-[150px]">
                        <img src={capital} alt="" />
                    </li>
                    <li className="mb-[95px] md:mb-0 md:mr-[150px]">
                        <img src={real} alt="" />
                    </li>
                    <li>
                        <img src={hospitality} alt="" />
                    </li>
                </ul>
            </MainContainer>

            {/* Separacion */}
            <MainContainer>
                <hr className="border-black" />
            </MainContainer>

            {/* Secciones */}
            <MainContainer className={"py-[65px] md:py-[100px] px-[30px]"}>
                <AnimatedTextWord
                    className="justify-center"
                    text={t("home.conoce_mas")}
                />

                <Tabs defaultTab="tabCapital">
                    <div className="flex justify-between w-full max-w-[480px] mx-auto">
                        <Tabs.Button
                            tabid="tabCapital"
                            className=" text-[13px] md:text-[16px]"
                            handleDefaultTab={(data) => setDefaultTab(data)}
                        >
                            Capital
                        </Tabs.Button>
                        <Tabs.Button
                            tabid="tabRealState"
                            className=" text-[13px] md:text-[16px]"
                            handleDefaultTab={(data) => setDefaultTab(data)}
                        >
                            Real Estate
                        </Tabs.Button>
                        <Tabs.Button
                            tabid="tabHospitality"
                            className=" text-[13px] md:text-[16px]"
                            handleDefaultTab={(data) => setDefaultTab(data)}
                        >
                            Hospitality
                        </Tabs.Button>
                    </div>

                    <Tabs.Container tabref={"tabCapital"}>
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:pr-[60px] lg:max-w-[540px] 2xl:pr-[200px] 2xl:max-w-[680px]">
                                <img
                                    src={onlyCapital}
                                    alt=""
                                    className="mb-[40px] aspect-square"
                                />

                                <div className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                    <AnimatedTextWord
                                        className="text-left !mb-[5px] leading-[0.6]"
                                        text={"CAPITAL"}
                                    />
                                    <LiaRegistered className="text-[16px] relative -top-1" />
                                </div>
                                <h3 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    <TextCustom>
                                        {t("capital.subtitulo")}
                                    </TextCustom>
                                </h3>
                                <Parrafo
                                    className="text-justify mb-[30px] md:mb-[80px]"
                                    textParse={t("home.capital.text")}
                                />
                                <Link to="/capital">
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={IMGcapital}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Capital"
                                />
                            </div>
                        </div>
                    </Tabs.Container>
                    <Tabs.Container tabref={"tabRealState"}>
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:pr-[60px] lg:max-w-[540px] 2xl:pr-[200px] 2xl:max-w-[680px]">
                                <img
                                    src={onlyReal}
                                    alt=""
                                    className="mb-[40px] aspect-square"
                                />

                                <div className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                    <AnimatedTextWord
                                        className="text-left !mb-[5px] leading-[0.6]"
                                        text={"REAL ESTATE"}
                                    />
                                    <LiaRegistered className="text-[16px] relative -top-1" />
                                </div>
                                <h3 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    <TextCustom>
                                        {t("real.subtitulo.part1")} <br />{" "}
                                        {t("real.subtitulo.part2")}
                                    </TextCustom>
                                </h3>

                                <Parrafo
                                    className="text-justify mb-[30px] md:mb-[80px]"
                                    textParse={t("home.real.text")}
                                />
                                <Link to={"/real-state"}>
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={IMGreal}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Real Station"
                                />
                            </div>
                        </div>
                    </Tabs.Container>
                    <Tabs.Container tabref={"tabHospitality"}>
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:pr-[60px] lg:max-w-[540px] 2xl:pr-[200px] 2xl:max-w-[680px]">
                                <img
                                    src={onlyHospitality}
                                    alt=""
                                    className="mb-[40px] aspect-square"
                                />

                                <div className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                    <AnimatedTextWord
                                        className="text-left !mb-[5px] leading-[0.6]"
                                        text={"HOSPITALITY"}
                                    />
                                    <LiaRegistered className="text-[16px] relative -top-1" />
                                </div>
                                <h3 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    <TextCustom>
                                        {t("hospi.subtitulo.part1")} <br />{" "}
                                        {t("hospi.subtitulo.part2")}
                                    </TextCustom>
                                </h3>

                                <Parrafo
                                    className="text-justify mb-[30px] md:mb-[80px]"
                                    textParse={t("home.hospi.text")}
                                />
                                <Link to={"hospitality"}>
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={IMGhospitality}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Real Station"
                                />
                            </div>
                        </div>
                    </Tabs.Container>
                </Tabs>
            </MainContainer>
        </main>
    );
}
