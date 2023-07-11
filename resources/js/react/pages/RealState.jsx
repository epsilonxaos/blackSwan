import MainContainer from "../components/MainContainer";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";
import Boton from "../components/Buttons";
import { HiArrowDown } from "react-icons/hi";
import { LiaRegistered } from "react-icons/lia";
import { Tabs } from "flowbite-react";

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

export default function RealState() {
    const proyectos = [
        {
            cover: IMGtotem,
            title: "Tótem Residencial",
            subtitle: "Residencial Sustentable",
            text: "Este proyecto residencial sustentable se ubica en Celestún, Yucatán y tiene como esencia la admiración, respeto y protección de la naturaleza, así como un compromiso con el desarrollo económico y social de las comunidades locales.",
        },
        {
            cover: IMGunicaliving,
            title: "Única Living",
            subtitle: "Residencial Sustentable",
            text: "Desarrollo residencial ubicado al norte de Mérida, Yucatán equipado con las mejores amenidades para disfrutar con comodidad y confort.",
        },
        {
            cover: IMGyukan,
            title: "Yukan Town Houses",
            subtitle: "Residencial Sustentable",
            text: "Conjunto de townhouses ubicado al norte de Mérida, equipados con las mejores amenidades y equipados de forma cómoda y funcional.",
        },
        {
            cover: IMGarenales,
            title: "Arenales",
            subtitle: "Residencial Sustentable",
            text: "Esta privada residencial cuenta con todas las amenidades para disfrutar la belleza de Yucatán y sus costas, gozando de altos niveles de seguridad y comodidad.",
        },
        {
            cover: IMGsantamar,
            title: "Santa Mar",
            subtitle: "Residencial Sustentable",
            text: [
                "Santa Mar es un proyecto <span class='font-bold'>residencial privado con un enfoque wellness.</span> Su principal objetivo es ofrecer un espacio para disfrutar de una vida en pleno equilibrio mental, emocional y físico, con todas sus amenidades necesarias.",
                "A diez minutos de Santa Mar se encuentra Sisal, donde se construirá un Club de Playa frente al mar.",
            ],
        },
        {
            cover: IMGalmaresidencial,
            title: "Alma Residencial",
            subtitle: "Residencial Sustentable",
            text: "Es una privada pensada para las familias que buscan un lugar tranquilo con amplios espacios de recreo; localizada en la mejor zona residencial de crecimiento de Yucatán. El perfecto equilibrio entre urbanidad y tranquilidad.",
        },
        {
            cover: IMGxomak,
            title: "Xomak",
            subtitle: "Residencial Sustentable",
            text: "Conjunto de lujosos departamentos boho chic tipo estudio ubicados en Tulum, Quintana Roo, que conjuntan comodidad y sofisticación en un destino de ensueño.",
        },
        {
            cover: IMGxekenyxakah,
            title: "Xexén xakáh",
            subtitle: "Residencial Sustentable",
            text: [
                "Este desarrollo consta de <span class='font-bold'>26 unidades totalmente urbanizadas</span> y creadas para complacer al más exquisito gusto, lo cual las hace perfectas para complacer a los residentes y experimentar una convivencia armoniosa en <span class='font-bold'>Tulum</span>.",
                "El complejo se divide en dos edificios de cuatro niveles: Jardín, Medio Bajo, Medio Alto y Azotea.",
            ],
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
                        alt="Real State"
                        className="w-[70px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={realText}
                        alt="Real State"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <Titulo className="text-white leading-[1] mb-[65px] lg:mb-[100px] xl:text-[70px]">
                        Construimos hoy <br /> el patrimonio del futuro
                    </Titulo>

                    <Boton className="mb-[40px] lg:mb-[80px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white">
                        <img src={play} alt="Play icon" className="mr-[4px]" />{" "}
                        Ver video
                    </Boton>

                    <Parrafo className="text-white text-[20px] mb-[40px]">
                        Conoce más sobre nosotros <br /> y nuestros proyectos
                    </Parrafo>

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
                        alt="Capital"
                    />
                </div>
                <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[150px] relative -top-1">
                    Construimos hoy <br />
                    el patrimonio del futuro
                </h3>
                <Titulo className="text-[26px] mb-[40px] lg:mb-[50px]">
                    <span className="font-bold">Black Swan Real Estate,</span>
                </Titulo>
                <Parrafo className="text-justify mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Es una unidad de negocio{" "}
                    <span className="font-bold">
                        especializada en el desarrollo y construcción de
                        proyectos en el rubro inmobiliario,
                    </span>{" "}
                    que surge a partir de Grupo RAS, constructora enfocada en la
                    supervisión de viviendas sociales fundada en por los socios
                    del grupo en 1997.
                </Parrafo>
                <Parrafo className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Durante el 2005, los socios deciden llevar la empresa a otro
                    nivel a través del desarrollo de{" "}
                    <span className="font-bold">
                        proyectos inmobiliarios con servicios completos y de
                        vivienda vertical,
                    </span>{" "}
                    basados en la experiencia e inversiones acumuladas desde sus
                    inicios.
                </Parrafo>
                <Parrafo className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Hoy en día,{" "}
                    <span className="font-bold">
                        la empresa cuenta con más de
                    </span>
                </Parrafo>

                <ul className="lg:flex lg:items-start lg:justify-around lg:max-w-[1200px] md:mb-[50px] mx-auto">
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            100 mil m
                            <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                2
                            </sup>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            Supervisados
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            400 mil m
                            <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                2
                            </sup>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            Desarrollados
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            20 mil m
                            <sup className="text-[16px] relative top-[-12px] md:top-[-18px]">
                                2
                            </sup>
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            Construidos
                        </Parrafo>
                    </li>
                </ul>

                <Parrafo className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Proyectos como Única Living, Kantara Residencial, Yukán
                    Townhouses, Tótem Residencial, entre otros, así como los más
                    de mil clientes satisfechos y varias dependencias de
                    Gobierno a nivel local y nacional, sustentan los casos de
                    éxito y logros de esta unidad de negocio.
                </Parrafo>
                <Parrafo className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Al día de hoy, continúan en{" "}
                    <span className="font-bold">
                        proyecto privadas residenciales y proyectos verticales
                        con el sello responsabilidad medioambiental y la
                        filosofía wellness,
                    </span>{" "}
                    basado en ello, planean desarrollar más de diez millones de
                    metros cuadrados en los próximos 5 años.
                </Parrafo>
            </MainContainer>

            {/* Separador */}
            <MainContainer className={"max-md:px-0"}>
                <hr className="border-black" />
            </MainContainer>

            {/* Proyectos */}
            <MainContainer
                className={"pt-[60px] pb-[30px] lg:pt-[100px] lg:pb-[90px]"}
            >
                <Titulo className="text-[30px] mb-[40px] md:text-[32px]">
                    <span className="font-bold">Black Swan Real State</span>{" "}
                    cuenta con los siguientes proyectos
                </Titulo>

                <Tabs.Group
                    aria-label="Tabs with underline"
                    style="underline"
                    className="justify-center gap-2 border-none"
                >
                    {/* Única Living */}
                    {proyectos.map((item) => (
                        <Tabs.Item active title={item.title} className="">
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
                                        <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                            {item.title}
                                        </Titulo>
                                        <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                            {item.subtitle}
                                        </h3>
                                        {typeof item.text == "string" ? (
                                            <Parrafo className="text-justify">
                                                {item.text}
                                            </Parrafo>
                                        ) : (
                                            item.text.map((tx, idx) => (
                                                <Parrafo
                                                    className={`text-justify ${
                                                        item.length == idx + 1
                                                            ? ""
                                                            : "mb-[30px]"
                                                    }`}
                                                    textParse={tx}
                                                ></Parrafo>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Tabs.Item>
                    ))}
                </Tabs.Group>
            </MainContainer>
        </main>
    );
}
