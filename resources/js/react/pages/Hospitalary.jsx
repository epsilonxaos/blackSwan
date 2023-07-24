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
import IMGamate from "../../../img/web/hospitalary/amate.jpg";
import IMGtotem from "../../../img/web/hospitalary/totem.jpg";
import IMGcignohotel from "../../../img/web/hospitalary/cignohotel.jpg";
import AnimatedTextWord from "../animations/AnimationTextWord";
import TextCustom from "../components/TextCustom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hospitalary() {
    const { t, i18n } = useTranslation();
    const proyectos = [
        {
            id: "tabcasaamate",
            cover: IMGcasaamate,
            title: "Casa Amate",
            subtitle: {
                es: "Hoteles de experiencias",
                en: "Hoteles de experiencias",
            },
            text: {
                es: "Este proyecto contempla la apertura de un hostal boutique temático enfocado en generar experiencias únicas para los huéspedes con actividades que conjuntan arte, diversión y gastronomía teniendo como contexto la calle 61 del centro de Mérida.",
                en: "This project contemplates the upcoming opening of a themed boutique hostel focused on generating unique experiences for guests with activities that combine art, fun and gastronomy having the 61th street from Merida’s downtown as its scenario.",
            },
        },
        {
            id: "tabcignohotel",
            cover: IMGcignohotel,
            title: "Cigno Hotel",
            subtitle: {
                es: "Hotel Boutique Ermita",
                en: "Hotel Boutique Ermita",
            },
            text: {
                es: "Hotel boutique enfocado en convertirse en un refugio para exploradores que buscan en cada viaje una experiencia enriquecedora, ubicado en La Ermita, la cual recientemente ha obtenido la distinción de ser el primer barrio mágico de la capital yucateca debido a su riqueza histórica y cultural.",
                en: 'Boutique hotel focused on becoming a refuge for explorers who seek an enriching experience on each trip. It is located in La Ermita, which has recently obtained the distinction of being the first "Barrio Mágico" (Magic neighborhood) of Mérida due to its historical and cultural wealth.',
            },
        },
        {
            id: "tabcignohotel",
            cover: IMGamate,
            title: "Amate Experiencia",
            subtitle: { es: "Tours personalizados", en: "Tailored tours" },
            text: {
                es: "Actividades diseñadas por personas locales para ofrecerle a los visitantes la oportunidad de disfrutar los atractivos turísticos, gastronómicos y culturales de Yucatán de forma personalizada y cercana.",
                en: "Amate Experiencias is a fresh way to enjoy the finest attractions of Mérida and Yucatán in a personalized way carefully designed by local people.",
            },
        },
        {
            id: "tabcignohotel",
            cover: IMGtotem,
            title: "Tótem Beach Club",
            subtitle: { es: "Club de playa", en: "Beachside club" },
            text: {
                es: "Club de playa ubicado frente al mar de Celestún, Yucatán que cuenta con restaurante, piscinas, y todas las amenidades necesarias para disfrutar cómodamente del sol y la arena en familia, en pareja o con amigos. El club ofrece membresías para socios así como pases para el público en general.",
                en: "This brand new beach club located by the sea of Celestún, Yucatán has a restaurant, swimming pools, and all the necessary amenities to comfortably enjoy the sun and sand along with family, significant other, or friends. The club offers memberships as well as passes for the general public.",
            },
        },
    ];

    return (
        <main>
            {/* Banner principal */}
            <div className="bg-black">
                <MainContainer
                    className={
                        "py-[60px] md:py-[100px] min-h-[700px]  lg:min-h-[850px] lg:h-[calc(100vh-68px)] lg:max-h-[870px]"
                    }
                >
                    <img
                        src={hospitalary}
                        alt="Hospitality"
                        className="w-[50px] mx-auto mb-[40px] lg:mb-[60px]"
                    />
                    <img
                        src={hospitalaryText}
                        alt="Hospitality"
                        className="w-[256px] xl:w-[400px] mx-auto mb-[70px] lg:mb-[90px]"
                    />
                    <AnimatedTextWord
                        text={t("hospi.subtitulo.part1")}
                        className="text-white leading-[1.1] xl:text-[70px] !mb-0 justify-center items-center"
                    />
                    <AnimatedTextWord
                        text={t("hospi.subtitulo.part2")}
                        className="text-white leading-[1.2] mb-[55px] lg:mb-[80px] xl:text-[70px] justify-center items-center"
                    />

                    <Boton className="mb-[40px] lg:mb-[80px] text-[14px] mx-auto flex items-center justify-center p-[6px] pr-[10px] text-[#CCCCCD] hover:text-black bg-[#3A3A3A] hover:bg-white">
                        <img src={play} alt="Play icon" className="mr-[4px]" />{" "}
                        {t("verVideo")}
                    </Boton>

                    <Parrafo
                        className="text-white text-[20px] mb-[40px]"
                        textParse={t("conoceMasNosotros")}
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
                    {t("hospi.subtitulo.part1")} <br />
                    {t("hospi.subtitulo.part2")}
                </h3>
                <Parrafo
                    className="text-left mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("hospi.info.text.0")}
                />
                <Parrafo
                    className="text-left  mb-[30px] lg:mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("hospi.info.text.1")}
                />
                <Parrafo
                    className="text-left mb-[40px] md:w-[90%] max-w-[1300px] mx-auto"
                    textParse={t("hospi.info.text.2")}
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
                    <TextCustom textParse={t("hospi.proyectos.titulo")} />
                </h3>

                <Tabs defaultTab={"tabcignohotel"}>
                    <div className="flex justify-between w-full max-w-[300px] mx-auto">
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
                                </div>
                            </div>
                        </Tabs.Container>
                    ))}
                </Tabs>
            </MainContainer>
        </main>
    );
}
