import MainContainer from "../components/MainContainer";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";
import Boton from "../components/Buttons";
import { HiArrowDown } from "react-icons/hi";
import { LiaRegistered } from "react-icons/lia";
import Tabs from "../components/Tabs";

import capital from "../../../img/web/capital/capital.svg";
import play from "../../../img/web/play.svg";
import onlyCapital from "../../../img/web/recursos-oscuros/onlyCapital.svg";
import IMGkiller from "../../../img/web/capital/killer.png";
import IMGgrupo from "../../../img/web/capital/grupo.png";
import IMGfitorade from "../../../img/web/capital/fitorade.jpg";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function Capital() {
    const { t, i18n } = useTranslation();
    const [toggler, setToggler] = useState(false);
    const proyectos = [
        {
            id: "tabFitorade",
            cover: IMGfitorade,
            url: "https://www.fitorade.com/",
            title: "Fitorade",
            subtitle: { es: "Daily Meal Plan", en: "Daily Meal Plan" },
            text: {
                es: "Servicio de comida saludable en Mérida que ofrece comidas elaboradas con alimentos integrales y completamente saludables.",
                en: "Healthy food service in Mérida with the goal to offer meals made with whole and completely healthy foods.",
            },
        },
        {
            id: "tabGrupoLibera",
            cover: IMGgrupo,
            title: "Grupo Libera",
            url: "https://www.grupolibera.mx/",
            subtitle: {
                es: "Comercialización y desarrollo de bienes inmuebles",
                en: "Marketing and development of real estate",
            },
            text: {
                es: "Empresa enfocada en la comercialización de proyectos inmobiliarios que tienen como objetivo asegurar tu futuro invirtiendo en las mejores zonas del estado de Yucatán.",
                en: "Company focused on commercialization of real estate projects that aim to ensure the clients’ wealth by investing in the best areas of Yucatan.",
            },
        },
        {
            id: "tabKillerQuake",
            cover: IMGkiller,
            url: "https://killerquake.com.mx/",
            title: "Killer Quake",
            subtitle: { es: "Comercialización", en: "Commercialization" },
            text: {
                es: "Empresa enfocada en la creación de contenido que se plasma en diferentes artículos disponibles a la venta.",
                en: "Company focused on the creation of content for different items available for sale.",
            },
        },
    ];

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
                        src={capital}
                        alt="Capital"
                        className="w-[160px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <AnimatedTextWord
                        text={t("capital.subtitulo")}
                        className="text-white leading-[1.3] mb-[65px] lg:mb-[100px] xl:text-[70px] xl:h-[140px] justify-center items-center"
                    />

                    <FsLightbox
                        toggler={toggler}
                        sources={[
                            "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
                        ]}
                    />
                    <Boton
                        // onClick={() => {
                        //     console.log("click");
                        //     setToggler(!toggler);
                        // }}
                        className="mb-[40px] lg:mb-[80px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white"
                    >
                        <img src={play} alt="Play icon" className="mr-[4px]" />{" "}
                        {t("verVideo")}
                    </Boton>

                    <Parrafo
                        className="text-white text-[20px] mb-[40px]"
                        textParse={t("conoceMasNosotros")}
                    />

                    <Link to="#info">
                        <HiArrowDown className="text-white text-[24px] mx-auto" />
                    </Link>
                </MainContainer>
            </div>

            {/* Informacion */}
            <MainContainer
                className={"pt-[70px] pb-[30px] lg:pb-[100px]"}
                id={"info"}
            >
                <hr className="border-black mb-[20px] hidden md:block" />
                <div className="flex items-center justify-between">
                    <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                        CAPITAL{" "}
                        <LiaRegistered className="text-[16px] relative -top-1" />
                    </Titulo>
                    <img
                        src={onlyCapital}
                        className="w-[80px] relative -top-[6px]"
                        alt="Capital"
                    />
                </div>
                <h3 className="text-gris text-left text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[150px] relative -top-1">
                    {t("capital.subtitulo")}
                </h3>
                <Titulo className="text-[30px] leading-[0] text-left md:text-center !mb-0">
                    {t("capital.info.title_1")}
                </Titulo>
                <Titulo className="text-[30px] leading-[0.5] mb-[40px] lg:mb-[50px]">
                    <span className="font-bold">Black Swan Capital</span>
                </Titulo>
                <Parrafo
                    className="text-left mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("capital.info.text.0")}
                />
                <Parrafo
                    className="text-left  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("capital.info.text.1")}
                />
                <Parrafo
                    className="text-left  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("capital.info.text.2")}
                />
                <Parrafo
                    className="text-left mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("capital.info.text.3")}
                />

                <ul className="lg:flex lg:items-start lg:justify-around lg:max-w-[1200px] md:mb-[50px] mx-auto">
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>{t("capital.info.text.4")}</TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("capital.info.text.5")}
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            {t("capital.info.text.6")}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>{t("capital.info.text.7")}</TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("capital.info.text.8")}
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            {t("capital.info.text.9")}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>{t("capital.info.text.10")}</TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("capital.info.text.11")}
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            {t("capital.info.text.12")}
                        </Parrafo>
                    </li>
                </ul>

                <Parrafo
                    className="text-left sm:text-center mb-[40px]"
                    textParse={t("capital.info.text.13")}
                />
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
                <h3 className="tracking-[-0.96px] leading-[1.05] font-medium text-center text-[30px] mb-[40px] md:text-[32px]">
                    <TextCustom textParse={t("capital.proyectos.titulo")} />
                </h3>

                <Tabs defaultTab={"tabFitorade"}>
                    <div className="flex justify-between w-full max-w-[480px] mx-auto">
                        {proyectos.map((item) => (
                            <Tabs.Button
                                key={item.id}
                                tabid={item.id}
                                className="w-1/2 text-[13px] md:text-[16px]"
                            >
                                {item.title}
                            </Tabs.Button>
                        ))}
                    </div>

                    {proyectos.map((item) => (
                        <Tabs.Container
                            key={"container-" + item.id}
                            tabref={item.id}
                        >
                            <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                                <div className="mb-[30px] lg:mb-0 lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-600px)]">
                                    <img
                                        src={item.cover}
                                        className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
										xl:h-full w-full max-w-full"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="lg:pl-[60px] lg:max-w-[460px] 2xl:pl-[200px] 2xl:max-w-[600px]">
                                    <div className="flex flex-col h-full justify-center">
                                        <AnimatedTextWord
                                            className="text-left !mb-[5px] leading-[1.3]"
                                            text={item.title}
                                        />
                                        <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                            <TextCustom>
                                                {item.subtitle[i18n.language]}
                                            </TextCustom>
                                        </h3>
                                        <div className="mb-[30px] md:mb-[80px]">
                                            {typeof item.text[i18n.language] ==
                                            "string" ? (
                                                <Parrafo className="text-left">
                                                    {item.text[i18n.language]}
                                                </Parrafo>
                                            ) : (
                                                item.text[i18n.language].map(
                                                    (tx, idx) => (
                                                        <Parrafo
                                                            key={
                                                                "parrafo-" +
                                                                item.id +
                                                                "-" +
                                                                idx
                                                            }
                                                            className={`text-left ${
                                                                item.length ==
                                                                idx + 1
                                                                    ? ""
                                                                    : "mb-[30px]"
                                                            }`}
                                                            textParse={tx}
                                                        ></Parrafo>
                                                    )
                                                )
                                            )}
                                        </div>
                                        {item?.url && (
                                            <a
                                                href={item.url}
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
        </main>
    );
}
