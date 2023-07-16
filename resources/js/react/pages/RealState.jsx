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
import logo4 from "../../../img/web/logos/4.jpg";
import logo5 from "../../../img/web/logos/5.png";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";

export default function RealState() {
    const { t, i18n } = useTranslation();
    const proyectos = [
        {
            id: "tabunicaliving",
            cover: IMGunicaliving,
            title: "Única Living",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Desarrollo residencial ubicado al norte de Mérida, Yucatán, equipado con las mejores amenidades para disfrutar con comodidad y confort.",
                en: "Residential development located north of Mérida, Yucatán, equipped with the best amenities to enjoy with ease and comfort.",
            },
        },
        {
            id: "tabalmaresidencial",
            cover: IMGalmaresidencial,
            title: "Alma Residencial",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Es una privada pensada para las familias que buscan un lugar tranquilo con amplios espacios de recreo; localizada en la mejor zona residencial de crecimiento de Yucatán. El perfecto equilibrio entre urbanidad y tranquilidad.",
                en: "This is a private residential project designed for families who look for a quiet place with wide spaces for recreation. It is located in the best growing residential area of Yucatan and offers the perfect balance between urbanity and tranquility.",
            },
        },
        {
            id: "tabxekenyxakah",
            cover: IMGxekenyxakah,
            title: "Xexén xakáh",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: [
                    "Este desarrollo consta de 26 unidades totalmente urbanizadas y creadas para complacer al más exquisito gusto, lo cual las hace perfectas para complacer a los residentes y experimentar una convivencia armoniosa en Tulum.",
                    "El complejo se divide en dos edificios de cuatro niveles: Jardín, Medio Bajo, Medio Alto y Azotea.",
                ],
                en: "This development consists of 26 fully urbanized units created to please the most exquisite taste with a harmonious coexistence in Tulum. The complex is divided into two buildings with four levels: Garden, Medium Low, Medium High and Rooftop.",
            },
        },
        {
            id: "tabsantamar",
            cover: IMGsantamar,
            title: "Santa Mar",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: [
                    "Santa Mar es un proyecto residencial privado con un enfoque wellness. Su principal objetivo es ofrecer un espacio para disfrutar de una vida en pleno equilibrio mental, emocional y físico, con todas sus amenidades necesarias.",
                    "A diez minutos de Santa Mar se encuentra Sisal, donde se construirá un Club de Playa frente al mar.",
                ],
                en: "Santa Mar is a private residential project with a wellness philosophy focus. Its main objective is to offer a place where people can enjoy a life in full mental, emotional and physical balance, with all its necessary amenities. Ten minutes away from Santa Mar is Sisal, where a Beach Club will be built facing the sea.",
            },
        },
        {
            id: "tabarenales",
            cover: IMGarenales,
            title: "Arenales",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Esta privada residencial cuenta con todas las amenidades para disfrutar la belleza de Yucatán y sus costas, gozando de altos niveles de seguridad y comodidad.",
                en: "This private residential project has every amenity required to fully enjoy the beauty of Yucatan’s coasts with high levels of security and comfort.",
            },
        },
        {
            id: "tabtotem",
            cover: IMGtotem,
            title: "Tótem Residencial",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Este proyecto residencial sustentable se ubica en Celestún, Yucatán y tiene como esencia la admiración, respeto y protección de la naturaleza, así como un compromiso con el desarrollo económico y social de las comunidades locales.",
                en: "This sustainable residential project is located in Celestún, Yucatán and has as its essence the admiration, respect and protection of nature, as well as a commitment to the economic and social development of local communities.",
            },
        },
        {
            id: "tabyukan",
            cover: IMGyukan,
            title: "Yukan Town Houses",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Conjunto de townhouses ubicado al norte de Mérida, equipados con las mejores amenidades y equipados de forma cómoda y funcional.",
                en: "Set of townhouses located north of Mérida, equipped with the best amenities in a comfortable and functional way.",
            },
        },
        {
            id: "tabxomak",
            cover: IMGxomak,
            title: "Xomak",
            subtitle: {
                es: "Residencial Sustentable",
                en: "Sustainable Residential",
            },
            text: {
                es: "Conjunto de lujosos departamentos boho chic tipo estudio ubicados en Tulum, Quintana Roo, que conjuntan comodidad y sofisticación en un destino de ensueño.",
                en: "Set of luxurious boho chic studio apartments located in Tulum, Quintana Roo, which combine comfort and sophistication in a dream destination.",
            },
        },
    ];

    return (
        <main>
            {/* Banner principal */}
            <div className="bg-black">
                <MainContainer
                    className={
                        "py-[60px] md:py-[100px] min-h-[700px] lg:h-[calc(100vh-68px)] lg:max-h-[870px]"
                    }
                >
                    <img
                        src={real}
                        alt="Real Estate"
                        className="w-[70px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={realText}
                        alt="Real Estate"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <AnimatedTextWord
                        text={t("real.subtitulo.part1")}
                        className="text-white leading-[1.1] xl:text-[70px] !mb-0 justify-center items-center"
                    />
                    <AnimatedTextWord
                        text={t("real.subtitulo.part2")}
                        className="text-white leading-[1.2] mb-[65px] lg:mb-[100px] xl:text-[70px] justify-center items-center"
                    />

                    <Boton className="mb-[40px] lg:mb-[80px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white">
                        <img src={play} alt="Play icon" className="mr-[4px]" />{" "}
                        {t("verVideo")}
                    </Boton>

                    <Parrafo
                        className="text-white text-[20px] mb-[40px]"
                        textParse={t("conoceMasNosotros")}
                    />

                    <HiArrowDown className="text-white text-[24px] mx-auto" />
                </MainContainer>
            </div>

            {/* Informacion */}
            <MainContainer
                className={"pt-[60px] pb-[30px] lg:pb-[100px] px-[30px]"}
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
                <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[150px] relative -top-1">
                    {t("real.subtitulo.part1")} <br />
                    {t("real.subtitulo.part2")}
                </h3>
                <Titulo className="text-[26px] mb-[40px] lg:mb-[50px]">
                    <span className="font-bold">Black Swan Real Estate,</span>
                </Titulo>
                <Parrafo
                    className="text-justify mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("real.info.text.0")}
                />
                <Parrafo
                    className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("real.info.text.1")}
                />
                <Parrafo
                    className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("real.info.text.2")}
                />

                <ul className="lg:flex lg:items-start lg:justify-around lg:max-w-[1200px] md:mb-[50px] mx-auto">
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>
                                {t("real.info.text.3")} m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("real.info.text.4")}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>
                                {t("real.info.text.7")} m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("real.info.text.8")}
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            <TextCustom>
                                {t("real.info.text.5")} m
                                <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                    2
                                </sup>
                            </TextCustom>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            {t("real.info.text.6")}
                        </Parrafo>
                    </li>
                </ul>

                <Parrafo
                    className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("real.info.text.9")}
                />
                <Parrafo
                    className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("real.info.text.10")}
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
                    <TextCustom textParse={t("real.proyectos.titulo")} />
                </h3>

                <Tabs defaultTab={"tabtotem"}>
                    <div className="flex justify-center flex-wrap w-full max-w-[780px] mx-auto">
                        {proyectos.map((item) => (
                            <Tabs.Button
                                key={item.id}
                                tabid={item.id}
                                className="w-1/2 md:w-1/4 max-w-none text-[13px] md:text-[16px]"
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
                                            className="text-left !mb-[5px] leading-[0.6]"
                                            text={item.title}
                                        />
                                        <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                            <TextCustom>
                                                {item.subtitle[i18n.language]}
                                            </TextCustom>
                                        </h3>
                                        {typeof item.text[i18n.language] ==
                                        "string" ? (
                                            <Parrafo className="text-justify">
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
                                                        className={`text-justify ${
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
                                </div>
                            </div>
                        </Tabs.Container>
                    ))}
                </Tabs>
            </MainContainer>

            {/* Proyectos entregados */}
            <MainContainer className={"py-[80px] lg:pb-[140px]"}>
                <Parrafo
                    className="text-[25px] mb-[80px]"
                    textParse={t("real.proyectos.entregados")}
                />

                <ul className="flex flex-wrap justify-between max-w-[1250px] mx-auto">
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo1}
                            alt="Xomak"
                            className="max-w-full h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo2}
                            alt="Kantara"
                            className="max-w-full h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/3 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-[70px] lg:mb-0">
                        <img
                            src={logo3}
                            alt="Yukan"
                            className="max-w-full h-auto"
                        />
                    </li>
                    <li className="w-[40%] md:w-1/2 lg:w-auto h-[120px] flex items-end justify-center mb-[30px] md:mb-0">
                        <img
                            src={logo4}
                            alt="Palma Real"
                            className="max-w-full h-auto"
                        />
                    </li>
                    <li className="w-[100%] md:w-1/2 lg:w-auto h-[120px] flex items-end justify-center">
                        <img
                            src={logo5}
                            alt="Unica"
                            className="max-w-full h-auto"
                        />
                    </li>
                </ul>
            </MainContainer>
        </main>
    );
}
