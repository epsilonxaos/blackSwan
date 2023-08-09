import MainContainer from "../components/MainContainer";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";
import Boton from "../components/Buttons";
import { HiArrowDown } from "react-icons/hi";
import { LiaRegistered } from "react-icons/lia";
import Tabs from "../components/Tabs";

import real from "../../../img/web/real/real.svg";
import realText from "../../../img/web/real/realText.svg";
import play from "../../../img/web/play.svg";
import onlyReal from "../../../img/web/recursos-oscuros/onlyReal.svg";

import IMGalmaresidencial from "../../../img/web/real/almaresidencial.png";
import IMGarenales from "../../../img/web/real/arenales.jpg";
import IMGsantamar from "../../../img/web/real/santamar.jpg";
import IMGtotem from "../../../img/web/real/totem.png";
import IMGunicaliving from "../../../img/web/real/unicaliving.jpg";
import IMGxekenyxakah from "../../../img/web/real/xekenyxakah.png";
import IMGxomak from "../../../img/web/real/xomak.jpg";
import IMGyukan from "../../../img/web/real/yukan.jpg";

import logo1 from "../../../img/web/logos/1.png";
import logo2 from "../../../img/web/logos/2.png";
import logo3 from "../../../img/web/logos/3.png";
import logo4 from "../../../img/web/logos/4.png";
import logo5 from "../../../img/web/logos/5.png";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import parse from "html-react-parser";
import AppContext from "../context/AppContext";
import FsLightbox from "fslightbox-react";

export default function RealState() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();
    const [toggler, setToggler] = useState(false); //? Videos

    return (
        <main>
            {/* Banner principal */}
            <div className="bg-black">
                <MainContainer
                    className={
                        "py-[60px] md:py-[100px] min-h-[700px] lg:min-h-[850px] lg:h-[calc(100vh-68px)] lg:max-h-[870px]"
                    }
                >
                    <img
                        src={real}
                        alt="Real Estate"
                        className="w-[50px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={realText}
                        alt="Real Estate"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <TextCustom
                        textParse={
                            state.textsi18n[i18n.language].real_s1_title ?? ""
                        }
                        className="text-[32px] md:text-[40px] tracking-[-0.96px] font-medium text-center block w-full text-white leading-[1.3] mb-[65px] lg:mb-[100px] xl:text-[70px] xl:h-[140px] justify-center items-center"
                    />

                    <FsLightbox
                        toggler={toggler}
                        sources={[state.website.capital_video]}
                    />
                    <Boton
                        onClick={() => {
                            console.log("click");
                            setToggler(!toggler);
                        }}
                        className={`mb-[40px] lg:mb-[80px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white ${
                            state.website.capital_video
                                ? ""
                                : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <img src={play} alt="Play icon" className="mr-[4px]" />{" "}
                        {t("verVideo")}
                    </Boton>

                    <TextCustom
                        className="tracking-[-0.54px] leading-[1.2] text-white text-[20px] mb-[40px] block"
                        textParse={
                            state.textsi18n[i18n.language].real_s1_subtitle ??
                            ""
                        }
                    />

                    <Link to={"#info"}>
                        <HiArrowDown className="text-white text-[24px] mx-auto" />
                    </Link>
                </MainContainer>
            </div>

            {/* Informacion */}
            <MainContainer
                className={"pt-[70px] pb-[30px] lg:pb-[100px] px-[30px]"}
                id="info"
            >
                <hr className="border-black mb-[20px] hidden md:block" />
                <div className="flex items-center justify-between">
                    <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                        REAL ESTATE{" "}
                        <LiaRegistered className="text-[16px] relative top-[2px]" />
                    </Titulo>
                    <img
                        src={onlyReal}
                        className="w-[40px] md:w-[60px] relative -top-[6px]"
                        alt="Real estate"
                    />
                </div>
                <div className="text-gris text-left text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[150px] relative -top-1">
                    {parse(state.textsi18n[i18n.language].real_s1_title)}
                </div>
                <Titulo className="text-[30px] leading-[0] text-left md:text-center !mb-0">
                    {state.textsi18n[i18n.language].real_s2_title1}
                </Titulo>
                <Titulo className="text-[30px] leading-[0.5] mb-[40px] lg:mb-[50px]">
                    <span className="font-bold">
                        {state.textsi18n[i18n.language].real_s2_title2}
                    </span>
                </Titulo>
                <div className="text-parrafos pb-[10px] md:w-[90%] max-w-[1300px] mx-auto">
                    {parse(state.textsi18n[i18n.language].real_s2_info)}
                </div>

                <ul className="lg:flex lg:items-start lg:justify-around lg:max-w-[1200px] md:mb-[50px] mx-auto">
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05] text-center">
                            <TextCustom>
                                {state.textsi18n[i18n.language].real_s2_n1title}{" "}
                                m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] text-center lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {state.textsi18n[i18n.language].real_s2_n1subtitle}
                        </Parrafo>
                        <Parrafo className="leading-[1.2] text-center">
                            {state.textsi18n[i18n.language].real_s2_n1info}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>
                                {state.textsi18n[i18n.language].real_s2_n2title}{" "}
                                m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] text-center lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {state.textsi18n[i18n.language].real_s2_n2subtitle}
                        </Parrafo>
                        <Parrafo className="leading-[1.2] text-center">
                            {state.textsi18n[i18n.language].real_s2_n2info}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>
                                {state.textsi18n[i18n.language].real_s2_n3title}{" "}
                                m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] text-center lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {state.textsi18n[i18n.language].real_s2_n3subtitle}
                        </Parrafo>
                        <Parrafo className="leading-[1.2] text-center">
                            {state.textsi18n[i18n.language].real_s2_n3info}
                        </Parrafo>
                    </li>
                </ul>

                <div className="text-parrafos pb-[10px] md:w-[90%] max-w-[1300px] mx-auto">
                    {parse(state.textsi18n[i18n.language].real_s2_info2 ?? "")}
                </div>
            </MainContainer>

            {/* Separador */}
            <MainContainer className={"max-md:px-0"}>
                <hr className="border-black" />
            </MainContainer>

            {/* Proyectos */}
            <MainContainer
                className={
                    "pt-[60px] pb-[30px] lg:pt-[100px] lg:pb-[90px] px-[30px]"
                }
            >
                <div className="tracking-[-0.96px] leading-[1.05] font-medium text-[30px] mb-[40px] md:text-[32px]">
                    <TextCustom
                        textParse={
                            state.textsi18n[i18n.language].real_s3_title ?? ""
                        }
                    />
                </div>

                <Tabs defaultTab={"tab-id-" + state.real[0].id}>
                    <div className="flex justify-center flex-wrap w-full max-w-[780px] mx-auto">
                        {state.real.map((item) => (
                            <Tabs.Button
                                key={item.id}
                                tabid={"tab-id-" + item.id}
                                className="w-1/2 md:w-1/4 max-w-none text-[13px] md:text-[16px]"
                            >
                                {
                                    item.translations.find(
                                        ({ locale }) => locale == i18n.language
                                    ).title
                                }
                            </Tabs.Button>
                        ))}
                    </div>

                    {state.real.map((item) => (
                        <Tabs.Container
                            key={"container-" + item.id}
                            tabref={"tab-id-" + item.id}
                        >
                            <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                                <div className="mb-[30px] lg:mb-0 lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-600px)]">
                                    <img
                                        src={
                                            import.meta.env.VITE_APP_URL +
                                            item.cover
                                        }
                                        className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
										xl:h-full w-full max-w-full"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="lg:pl-[60px] lg:max-w-[460px] 2xl:pl-[200px] 2xl:max-w-[600px]">
                                    <div className="flex flex-col h-full justify-center">
                                        <AnimatedTextWord
                                            className="text-left !mb-[5px] leading-[1.3]"
                                            text={
                                                item.translations.find(
                                                    ({ locale }) =>
                                                        locale == i18n.language
                                                ).title
                                            }
                                        />
                                        <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                            <TextCustom>
                                                {
                                                    item.translations.find(
                                                        ({ locale }) =>
                                                            locale ==
                                                            i18n.language
                                                    ).subtitle
                                                }
                                            </TextCustom>
                                        </h3>
                                        <div className="mb-[30px] md:mb-[80px] text-parrafos">
                                            <TextCustom
                                                className="block"
                                                textParse={
                                                    item.translations.find(
                                                        ({ locale }) =>
                                                            locale ==
                                                            i18n.language
                                                    ).info
                                                }
                                            />
                                        </div>

                                        {item?.website && (
                                            <a
                                                href={item.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Boton>{t("verMas")}</Boton>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Tabs.Container>
                    ))}
                </Tabs>
            </MainContainer>

            {/* Proyectos entregados */}
            <MainContainer className={"py-[80px] lg:pb-[140px]"}>
                <Parrafo
                    className="text-[25px] mb-[80px] text-center"
                    textParse={t("real.proyectos.entregados")}
                />

                <ul className="flex flex-wrap justify-between max-w-[1250px] mx-auto">
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo1}
                            alt="Xomak"
                            className="max-w-[150px] h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo2}
                            alt="Kantara"
                            className="max-w-[150px] h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo3}
                            alt="Yukan"
                            className="max-w-[150px] h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/2 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-0">
                        <img
                            src={logo4}
                            alt="Palma Real"
                            className="max-w-[150px] h-auto"
                        />
                    </li>
                    <li className="w-[100%] md:w-1/2 lg:w-auto h-[120px] flex items-end justify-center">
                        <img
                            src={logo5}
                            alt="Unica"
                            className="max-w-[150px] h-[70%] md:h-[80%]"
                        />
                    </li>
                </ul>
            </MainContainer>
        </main>
    );
}
