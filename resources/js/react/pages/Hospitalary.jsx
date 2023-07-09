import MainContainer from "../components/MainContainer";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";
import Boton from "../components/Buttons";
import { HiArrowDown } from "react-icons/hi";
import { LiaRegistered } from "react-icons/lia";
import { Tabs } from "flowbite-react";

import hospitalary from "../../../img/web/hospitalary/hospitalary.svg";
import hospitalaryText from "../../../img/web/hospitalary/hospitalaryText.svg";
import play from "../../../img/web/play.svg";
import onlyHospitality from "../../../img/web/recursos-oscuros/onlyHospitality.svg";
import IMGkiller from "../../../img/web/capital/killer.png";
import IMGgrupo from "../../../img/web/capital/grupo.png";
import IMGfitorade from "../../../img/web/capital/fitorade.jpg";

export default function Hospitalary() {
    return (
        <main>
            {/* Banner principal */}
            <div className="bg-black">
                <MainContainer
                    className={"py-[60px] md:py-[100px] min-h-[700px]"}
                >
                    <img
                        src={hospitalary}
                        alt="Hospitality"
                        className="w-[70px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={hospitalaryText}
                        alt="Hospitality"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <Titulo className="text-white leading-[1.3] mb-[65px] lg:mb-[100px] xl:text-[70px]">
                        Creamos experiencias <br /> que inspiran
                    </Titulo>

                    <Boton className="mb-[40px] lg:mb-[150px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white">
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
                        HOSPITALITY{" "}
                        <LiaRegistered className="text-[16px] relative top-[2px]" />
                    </Titulo>
                    <img
                        src={onlyHospitality}
                        className="w-[40px] md:w-[60px] relative -top-[6px]"
                        alt="Capital"
                    />
                </div>
                <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[100px] relative -top-1">
                    Creamos experiencias <br />
                    que inspiran
                </h3>
                <Parrafo className="text-justify mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Durante el proceso de expansión de la empresa y gracias al
                    crecimiento turístico y económico de la Península Yucateca,
                    los socios de Black Swan se han consolidado como impulsores
                    del desarrollo, ejecución y operación de proyectos
                    relacionados al rubro de la hospitalidad.
                </Parrafo>
                <Parrafo className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    En 2022 se fundó el primer hotel y restaurante del grupo en
                    el barrio de “La Ermita" en Mérida, Yucatán, que forma parte
                    de los tres hoteles del grupo Cigno Hotels y que ha sido
                    nominado a los premios “MexBest by Quien 2023” en la
                    categoría de lo mejor de hospitalidad en el estado.
                </Parrafo>
                <Parrafo className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    En el 2023 iniciaron con la construcción del segundo hotel
                    justo frente al parque de la Plancha, inauguraron el Club de
                    Playa Tótem en la costa de Celestún en Yucatán, y se
                    contempla el inicio de operaciones del primero de tres
                    hostales de experiencia del grupo Casa Amate. Se espera
                    tener más de 500 cuartos en los próximos 5 años.
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
                    <span className="font-bold">Black Swan Hospitality</span>{" "}
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
