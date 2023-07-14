import MainContainer from "../components/MainContainer";
import { LiaRegistered } from "react-icons/lia";
import Parrafo from "../components/Parrafo";

import cisne from "../../../img/web/cisne-banner.svg";
import raulyjacobo from "../../../img/web/raulyjacobo.png";
import equipobs from "../../../img/web/equipobs.jpg";

import bg from "../../../img/web/banner-nosotros.jpg";

export default function Nosotros() {
    return (
        <main>
            {/* Banner principal */}
            <div
                className={`bg-[#7a7977] bg-center bg-no-repeat bg-blend-darken`}
                style={{ backgroundImage: "url(" + bg + ")" }}
            >
                <MainContainer
                    className={
                        " pt-[55px] pb-[35px] px-0 min-h-[650px] lg:h-[calc(100vh-68px)] lg:max-h-[870px]"
                    }
                >
                    <div className="flex items-center h-full">
                        <div className="max-w-max text-white">
                            <p className="mb-[30px] lg:mb-[60px] xl:mb-[90px]">
                                (MX)
                            </p>
                            <h1 className="font-medium text-[50px] lg:text-[90px] tracking-[-1.5px] leading-[1.1] mb-1">
                                <LiaRegistered className="text-[30px] lg:text-[35px] inline relative top-[-12px] lg:top-[-22px] xl:top-[-28px]" />{" "}
                                UN EQUIPO <br /> DE EXPERTOS
                            </h1>
                            <h3 className="font-medium text-[13px] lg:text-[18px] xl:text-[24px] tracking-[1.95px] uppercase mb-[25px] lg:mb-[45px]">
                                Raúl Sánchez Díaz y Jacobo Ceh Iza
                            </h3>
                            <div className="border-t-2 border-t-white w-[48px]"></div>
                        </div>
                    </div>
                </MainContainer>
            </div>

            {/* Raul y jacobo */}
            <MainContainer className={"px-0 lg:pr-0 py-[25px] lg:pb-0"}>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="w-full mb-[30px] lg:mb-0 lg:w-1/2 px-[40px] sm:pl-0">
                        <Parrafo className="mb-[30px] font-bold text-[24px] xl:text-[28px] text-left">
                            Raúl Sánchez Díaz y Jacobo Ceh Iza forman un dúo
                            excepcional en el mundo empresarial.
                        </Parrafo>
                        <Parrafo className="text-justify mb-[30px]">
                            Raúl Sánchez Díaz y Jacobo Ceh Iza, estudiaron
                            juntos la carrera de Ingeniería Industrial del año
                            1998 al 2002. En 1997 emprendieron su primera
                            empresa y la nombraron Grupo RAS, dedicada a la
                            construcción de casas habitación.
                        </Parrafo>
                        <Parrafo className="text-justify mb-[30px]">
                            Durante el 2005, los socios deciden desarrollar
                            proyectos inmobiliarios con servicios completos y de
                            vivienda vertical, basados en la experiencia e
                            inversiones acumuladas desde sus inicios. En el
                            2011, invirtieron en su primer desarrollo
                            residencial privado, de nombre: Residencial Kantara,
                            con 370 lotes, parques y Casa Club, punto de partida
                            de varios desarrollos inmobiliarios ubicados en los
                            municipios de Mérida, Telchac y Conkal.
                        </Parrafo>
                        <Parrafo className="text-justify">
                            En 2019, adquirieron algunas casas antiguas en el
                            Centro Histórico de Mérida, con el objetivo de
                            convertirlas en hoteles y con ello fundar el primer
                            hotel boutique del grupo Cigno Hotels e igualmente
                            adquirieron acciones en empresas de diversos rubros
                            de mercado para así impulsar el crecimiento
                            empresarial y económico del grupo.
                        </Parrafo>
                    </div>
                    <div className="w-full lg:w-1/2 mb-[25px] px-[40px] md:px-0 lg:mb-0">
                        <img
                            src={raulyjacobo}
                            alt="Raúl Sánchez Díaz y Jacobo Ceh Iza"
                            className="bg-white w-full h-[500px] lg:h-[850px] object-contain max-w-[670px] mx-auto lg:mr-0"
                        />
                    </div>
                </div>
            </MainContainer>

            {/* Equipo */}
            <MainContainer className={"!px-0"}>
                <img
                    src={equipobs}
                    alt="Equipo Black Swan"
                    className="aspect-video"
                />
                <div className="pt-[50px] pb-[70px] px-[40px] sm:px-[30px] max-w-[1100px] mx-auto">
                    <Parrafo className="mb-[30px] lg:mb-[45px] text-[24px] lg:text-[28px]">
                        <span className="font-bold">Black Swan</span> forjando
                        un futuro impresionante.
                    </Parrafo>
                    <Parrafo className="text-justify mb-[30px]">
                        En Black Swan contamos con una serie de valores que son
                        la base de nuestra identidad y nos guían en cada paso
                        que damos.
                    </Parrafo>
                    <Parrafo className="text-justify mb-[30px]">
                        Raúl es un lector empedernido y siempre en su afán de
                        contagiar a Jacobo con su lectura, le recomendó un libro
                        de nombre: “El Cisne Negro” de Nassim Taleb, el cual
                        explica el significado de los eventos poco probables
                        pero que causan gran impacto en la humanidad, así nace
                        Black Swan con una filosofía que ha sido transmitida a
                        sus más de 120 colaboradores directos y 200
                        colaboradores indirectos.
                    </Parrafo>
                    <Parrafo className="text-justify mb-[30px]">
                        El grupo empresarial está comprometido con el sello de
                        responsabilidad con el medioambiente y la filosofía
                        wellness, y se ha dado a la labor de fundar el Santuario
                        del Tapir en uno de sus últimos proyectos, con el fin de
                        criar, reproducir y reintroducir a esta especie
                        actualmente extinta en el estado yucateco.
                    </Parrafo>
                    <Parrafo className="text-justify">
                        Con esfuerzo, calidad, tenacidad, compromiso, ejecución
                        e innovación, forjamos un futuro prometedor y nos
                        aseguramos de seguir siendo un referente en la
                        industria. Estamos comprometidos con el éxito de
                        nuestros clientes y con cumplir la promesa de resultados
                        excepcionales y la búsqueda constante de la perfección.
                    </Parrafo>
                </div>
            </MainContainer>
        </main>
    );
}
