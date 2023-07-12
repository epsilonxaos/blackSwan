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

export default function Capital() {
    const proyectos = [
        {
            id: "tabFitorade",
            cover: IMGfitorade,
            title: "Fitorade",
            subtitle: "Daily Meal Plan",
            text: "Servicio de comida saludable en Mérida en el que tenemos el compromiso de ofrecer comidas elaboradas con alimentos integrales y completamente saludables.",
        },
        {
            id: "tabGrupoLibera",
            cover: IMGgrupo,
            title: "Grupo Libera",
            subtitle: "omercialización y desarrollo de bienes inmuebles",
            text: "Empresa enfocada en la comercialización de proyectos inmobiliarios que tienen como objetivo asegurar tu futuro invirtiendo en las mejores zonas del estado de Yucatán.",
        },
        {
            id: "tabKillerQuake",
            cover: IMGkiller,
            title: "Killer Quake",
            subtitle: "Comercialización",
            text: "Empresa enfocada en la creación de contenido que se plasma en diferentes artículos disponibles a la venta.",
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
                        src={capital}
                        alt="Capital"
                        className="w-[160px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <Titulo className="text-white leading-[1.3] mb-[65px] lg:mb-[100px] xl:text-[70px] xl:h-[140px] xl:flex xl:items-center xl:justify-center">
                        Impulsamos el rendimiento
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
            <MainContainer className={"pt-[60px] pb-[30px] lg:pb-[100px]"}>
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
                <h3 className="text-gris text-[32px] xl:text-[40px] tracking-[-1.2px] leading-[1] mb-[50px] md:mb-[80px] lg:mb-[150px] relative -top-1">
                    Impulsamos el rendimiento
                </h3>
                <Titulo className="text-[30px] mb-[40px] lg:mb-[50px]">
                    En el 2005 se fundó <br />
                    <span className="font-bold">Black Swan Capital,</span>
                </Titulo>
                <Parrafo className="text-justify mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Una unidad de negocio cien por ciento financiero que inició
                    su crecimiento con el desarrollo de proyectos de inversión
                    inmobiliaria y posteriormente se ha ampliado a otros rubros
                    de negocio, como lo es principalmente el de hospitalidad.
                </Parrafo>
                <Parrafo className="text-justify  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Durante los primeros años desarrollaron proyectos
                    inmobiliarios con servicios completos y de vivienda
                    vertical, que fueron respaldados por la experiencia y
                    capital acumulado desde 1997. Hoy la empresa cuenta con más
                    de cien mil metros cuadrados supervisados, veinte mil metros
                    cuadrados construidos y más de cuatrocientos mil metros
                    cuadrados desarrollados.
                </Parrafo>
                <Parrafo className="text-justify mb-[40px] md:w-[90%] max-w-[1300px] mx-auto">
                    Progresivamente, los socios desarrollan, operan y/o
                    invierten en empresas como lo han sido: <br />
                    Cigno Hotels, Casa Amate Hostals, Killer Quake o Grupo
                    Libera, que cuentan con los parámetros económicos necesarios
                    y/o la filosofía de trabajo de la empresa.
                </Parrafo>

                <ul className="lg:flex lg:items-start lg:justify-around lg:max-w-[1200px] md:mb-[50px] mx-auto">
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            280 Millones
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            En ventas totales
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            Alcanzadas durante el añó 2022
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            $1,500,000
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            Ventas estimadas aseguradas
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            Para los próximos 4 años
                        </Parrafo>
                    </li>
                    <li className="text-center mb-[40px] lg:mb-0">
                        <h4 className="text-[32px] md:text-[40px] leading-[1.05]">
                            800 Millones
                        </h4>
                        <Parrafo className="text-gris leading-[1.2] lg:text-[20px] xl:text-[24px] mb-[10px]">
                            Valor empresarial con activos
                        </Parrafo>
                        <Parrafo className="leading-[1.2]">
                            Al día de hoy.
                        </Parrafo>
                    </li>
                </ul>

                <Parrafo className="text-justify sm:text-center mb-[40px]">
                    Está en proceso el desarrollo de su{" "}
                    <span className="font-bold">
                        primer fondo de inversión:
                    </span>{" "}
                    Black Swan Fund.
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
                    <span className="font-bold">Black Swan Capital</span> cuenta
                    con los siguientes proyectos
                </Titulo>

                <Tabs defaultTab={"tabFitorade"}>
                    <div className="flex justify-between w-full max-w-[480px] mx-auto">
                        {proyectos.map((item) => (
                            <Tabs.Button tabid={item.id} className="w-1/2">
                                {item.title}
                            </Tabs.Button>
                        ))}
                    </div>

                    {proyectos.map((item) => (
                        <Tabs.Container tabref={item.id}>
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
                        </Tabs.Container>
                    ))}
                </Tabs>
            </MainContainer>
        </main>
    );
}
