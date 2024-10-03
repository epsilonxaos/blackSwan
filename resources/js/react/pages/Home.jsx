import MainContainer from "../components/MainContainer";
import Tabs from "../components/Tabs";
import { LiaRegistered } from "react-icons/lia";
import { BiRegistered } from "react-icons/bi";

import cisnePrincipal from "../../../img/web/cisne-banner.svg";
import parse from "html-react-parser";

import bSngr from "../../../img/web/blackswan-ngr.svg";
import capital from "../../../img/web/recursos-oscuros/capital.svg";
import onlyCapital from "../../../img/web/recursos-oscuros/onlyCapital.svg";
import real from "../../../img/web/recursos-oscuros/real.svg";
import onlyReal from "../../../img/web/recursos-oscuros/onlyReal.svg";
import hospitality from "../../../img/web/recursos-oscuros/hospitality.svg";
import onlyHospitality from "../../../img/web/recursos-oscuros/onlyHospitality.svg";
import Boton from "../components/Buttons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";
import AppContext from "../context/AppContext";
import TextCustom2 from "../components/TextCustom2";

export default function Home() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();

    return (
        <main>
            {/* Banner principal */}
            <div className="bg-[#CCCCCD]">
                <MainContainer className={" pt-[55px] pb-0 lg:pb-[35px] px-0"}>
                    <div className="flex flex-col md:flex-row justify-between  sm:justify-start lg:justify-between h-full ">
                        <div className="w-full flex items-center h-full px-3 mb-[40px]">
                            <div className="max-w-ma mx-auto">
                                <p className="mb-[30px] lg:mb-[45px] xl:mb-[90px] font-bold">
                                    (MX)
                                </p>
                                <div className="relative">
                                    <div className="flex flex-wrap">
                                        <BiRegistered className="text-[20px] lg:text-[26px] inline absolute top-3 left-0" />

                                        <TextCustom
                                            className="w-full font-medium text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[90px] tracking-[-1.5px] leading-[1.3] pl-[28px] !mb-0"
                                            textParse={
                                                state.textsi18n[i18n.language]
                                                    .home_s1_title1
                                            }
                                        />
                                    </div>
                                </div>
                                {/* <AnimatedTextWord
                                    className="font-medium text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[90px] tracking-[-1.5px] leading-[1.3] pl-[28px] !mb-0"
                                    text={t("home.banner.1")}
                                /> */}
                                <TextCustom
                                    className="leading-[1.3] text-center w-full font-medium text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[90px] tracking-[-1.5px] pb-[25px] lg:pb-[45px] block"
                                    textParse={
                                        state.textsi18n[i18n.language]
                                            .home_s1_title2 ?? ""
                                    }
                                />
                                <div className="border-t-2 border-t-black w-[48px]"></div>
                            </div>
                        </div>
                        <div className="w-full">
                            <img
                                className="relative w-[90%] lg:w-full max-w-[320px] sm:max-w-[380px] lg:max-w-max md:-right-[30px] lg:top-0  ml-auto mx-0"
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
                <div className="flex justify-center mb-[50px] md:mb-[70px]">
                    <div className="block w-full md:w-5/6 max-w-[1250px] ">
                        <TextCustom2
                            className="text-parrafos"
                            textParse={
                                state.textsi18n[i18n.language].home_s2_text1
                            }
                        />
                    </div>
                </div>

                <ul className="flex flex-col md:flex-row items-center justify-center">
                    <li className="mb-[95px] md:mb-0 md:mr-[150px]">
                        <Link to={"real-state"}>
                            <img src={real} alt="" />
                        </Link>
                    </li>
                    <li className="mb-[95px] md:mb-0 md:mr-[150px]">
                        <Link to={"capital"}>
                            <img src={capital} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="hospitality">
                            <img src={hospitality} alt="" />
                        </Link>
                    </li>
                </ul>
            </MainContainer>

            {/* Separacion */}
            <MainContainer>
                <hr className="border-black" />
            </MainContainer>

            {/* Secciones */}
            <MainContainer className={"py-[65px] md:py-[100px] px-[30px]"}>
                <TextCustom
                    className="text-[32px] md:text-[40px] tracking-[-0.96px] leading-[1.05] font-medium text-center mb-[30px] flex flex-wrap w-full justify-center"
                    textParse={state.textsi18n[i18n.language].home_s3_title}
                />

                <Tabs defaultTab="tabRealState">
                    <div className="flex justify-between w-full max-w-[480px] mx-auto">
                        <Tabs.Button
                            tabid="tabRealState"
                            className=" text-[13px] md:text-[16px]"
                        >
                            Real Estate
                        </Tabs.Button>
                        <Tabs.Button
                            tabid="tabCapital"
                            className=" text-[13px] md:text-[16px]"
                        >
                            Capital
                        </Tabs.Button>
                        <Tabs.Button
                            tabid="tabHospitality"
                            className=" text-[13px] md:text-[16px]"
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
                                        className="text-left !mb-[5px] leading-[0.6] max-w-max"
                                        text={"CAPITAL"}
                                    />
                                    <LiaRegistered className="text-[16px] relative top-[2px]" />
                                </div>
                                <TextCustom2 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    {parse(
                                        state.textsi18n[i18n.language]
                                            .capital_s1_title
                                    )}
                                </TextCustom2>

                                <div className="mb-[30px] md:mb-[80px]">
                                    <TextCustom2 className="text-parrafos text-left">
                                        {parse(
                                            state.textsi18n[i18n.language]
                                                .home_s3_info1
                                        )}
                                    </TextCustom2>
                                </div>
                                <Link to="/capital">
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={
                                        import.meta.env.VITE_APP_URL +
                                        state.website.home_s3_bg1
                                    }
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
                                        className="text-left !mb-[5px] leading-[0.6] max-w-max"
                                        text={"REAL ESTATE"}
                                    />
                                    <LiaRegistered className="text-[16px] relative top-[2px]" />
                                </div>
                                <TextCustom2 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    {parse(
                                        state.textsi18n[i18n.language]
                                            .real_s1_title
                                    )}
                                </TextCustom2>

                                <div className="mb-[30px] md:mb-[80px]">
                                    <TextCustom2 className="text-parrafos text-left">
                                        {parse(
                                            state.textsi18n[i18n.language]
                                                .home_s3_info2
                                        )}
                                    </TextCustom2>
                                </div>
                                <Link to={"/real-state"}>
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={
                                        import.meta.env.VITE_APP_URL +
                                        state.website.home_s3_bg2
                                    }
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
                                        className="text-left !mb-[5px] leading-[0.6] max-w-max"
                                        text={"HOSPITALITY"}
                                    />
                                    <LiaRegistered className="text-[16px] relative inline top-[2px]" />
                                </div>
                                <TextCustom2 className="text-gris text-[32px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                    {parse(
                                        state.textsi18n[i18n.language]
                                            .hospi_s1_title
                                    )}
                                </TextCustom2>

                                <div className="mb-[30px] md:mb-[80px]">
                                    <TextCustom2 className="text-parrafos text-left">
                                        {parse(
                                            state.textsi18n[i18n.language]
                                                .home_s3_info3
                                        )}
                                    </TextCustom2>
                                </div>
                                <Link to={"hospitality"}>
                                    <Boton>{t("verMas")}</Boton>
                                </Link>
                            </div>
                            <div className="lg:w-[calc(100%-540px)] 2xl:w-[calc(100%-680px)]">
                                <img
                                    src={
                                        import.meta.env.VITE_APP_URL +
                                        state.website.home_s3_bg3
                                    }
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
