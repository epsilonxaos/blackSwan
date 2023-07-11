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
import IMGkiller from "../../../img/web/capital/killer.png";
import IMGgrupo from "../../../img/web/capital/grupo.png";
import IMGfitorade from "../../../img/web/capital/fitorade.jpg";

export default function RealState() {
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
                    {/* Fitorade */}
                    <Tabs.Item active title="Fitorade" className="">
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-600px)]">
                                <img
                                    src={IMGfitorade}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Capital"
                                />
                            </div>
                            <div className="lg:pl-[60px] lg:max-w-[460px] 2xl:pl-[200px] 2xl:max-w-[600px]">
                                <div className="flex flex-col h-full justify-center">
                                    <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                        Fitorade
                                    </Titulo>
                                    <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                        Daily Meal Plan
                                    </h3>
                                    <Parrafo className="text-justify">
                                        Servicio de comida saludable en Mérida
                                        en el que tenemos el compromiso de
                                        ofrecer comidas elaboradas con alimentos
                                        integrales y completamente saludables.
                                    </Parrafo>
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>

                    {/* Grupo Libera */}
                    <Tabs.Item title="Grupo Libera" className="">
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-600px)]">
                                <img
                                    src={IMGgrupo}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Capital"
                                />
                            </div>
                            <div className="lg:pl-[60px] lg:max-w-[460px] 2xl:pl-[200px] 2xl:max-w-[600px]">
                                <div className="flex flex-col h-full justify-center">
                                    <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                        Grupo Libera
                                    </Titulo>
                                    <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                        Comercialización y desarrollo de bienes
                                        inmuebles.
                                    </h3>
                                    <Parrafo className="text-justify">
                                        Empresa enfocada en la comercialización
                                        de proyectos inmobiliarios que tienen
                                        como objetivo asegurar tu futuro
                                        invirtiendo en las mejores zonas del
                                        estado de Yucatán.
                                    </Parrafo>
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>

                    {/* Killer Quake */}
                    <Tabs.Item title="Killer Quake" className="">
                        <div className="flex flex-col lg:flex-row w-full pt-[70px]">
                            <div className="mb-[30px] lg:mb-0 lg:w-[calc(100%-460px)] 2xl:w-[calc(100%-600px)]">
                                <img
                                    src={IMGkiller}
                                    className="object-cover h-[310px] sm:h-[400px] md:h-[490px]
									xl:h-full w-full max-w-full"
                                    alt="Capital"
                                />
                            </div>
                            <div className="lg:pl-[60px] lg:max-w-[460px] 2xl:pl-[200px] 2xl:max-w-[600px]">
                                <div className="flex flex-col h-full justify-center">
                                    <Titulo className="text-left !mb-[5px] leading-[0.6] flex items-start">
                                        Killer Quake
                                    </Titulo>
                                    <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[20px]">
                                        Comercialización
                                    </h3>
                                    <Parrafo className="text-justify">
                                        Empresa enfocada en la creación de
                                        contenido que se plasma en diferentes
                                        artículos disponibles a la venta.
                                    </Parrafo>
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs.Group>
            </MainContainer>
        </main>
    );
}
