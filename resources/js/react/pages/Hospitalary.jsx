import MainContainer from "../components/MainContainer";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";
import Boton from "../components/Buttons";
import { HiArrowDown } from "react-icons/hi";
import { LiaRegistered } from "react-icons/lia";
import Tabs from "../components/Tabs";

import hospitalary from "../../../img/web/hospitalary/hospitalary.svg";
import hospitalaryText from "../../../img/web/hospitalary/hospitalaryText.svg";
import play from "../../../img/web/play.svg";
import onlyHospitality from "../../../img/web/recursos-oscuros/onlyHospitality.svg";
import IMGcasaamate from "../../../img/web/hospitalary/casaamate.png";
import IMGcignohotel from "../../../img/web/hospitalary/cignohotel.jpg";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";

export default function Hospitalary() {
    const proyectos = [
        {
            id: "tabcignohotel",
            cover: IMGcignohotel,
            title: "Cigno Hotel",
            subtitle: "Hotel Boutique",
            text: "Hotel boutique enfocado en convertirse en un refugio para exploradores que buscan en cada viaje una experiencia enriquecedora.",
        },
        {
            id: "tabcasaamate",
            cover: IMGcasaamate,
            title: "Casa Amate",
            subtitle: "Hoteles Experiencia",
            text: "Hostal boutique temático enfocado en la experiencia única: arte, diversión y gastronomía. Lugar para viajeros que desean ser un local más.",
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
                        src={hospitalary}
                        alt="Hospitality"
                        className="w-[70px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={hospitalaryText}
                        alt="Hospitality"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <AnimatedTextWord
                        text={"Creamos experiencias"}
                        className="text-white leading-[1] xl:text-[70px] !mb-0"
                    />
                    <AnimatedTextWord
                        text={"que inspiran"}
                        className="text-white leading-[1] mb-[65px] lg:mb-[100px] xl:text-[70px]"
                    />

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
                <h3 className="tracking-[-0.96px] leading-[1.05] font-medium text-center text-[30px] mb-[40px] md:text-[32px]">
                    <TextCustom>
                        <span className="font-bold">
                            Black Swan Hospitality
                        </span>{" "}
                        cuenta con los siguientes proyectos
                    </TextCustom>
                </h3>

                <Tabs defaultTab={"tabcignohotel"}>
                    <div className="flex justify-between w-full max-w-[300px] mx-auto">
                        {proyectos.map((item) => (
                            <Tabs.Button
                                key={item.id}
                                tabid={item.id}
                                className="w-1/2"
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
                                                {item.subtitle}
                                            </TextCustom>
                                        </h3>
                                        {typeof item.text == "string" ? (
                                            <Parrafo className="text-justify">
                                                {item.text}
                                            </Parrafo>
                                        ) : (
                                            item.text.map((tx, idx) => (
                                                <Parrafo
                                                    key={
                                                        "parrafo-" +
                                                        item.id +
                                                        "-" +
                                                        idx
                                                    }
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
