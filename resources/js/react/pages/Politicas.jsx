import { useTranslation } from "react-i18next";
import AnimatedTextWord from "../animations/AnimationTextWord";
import MainContainer from "../components/MainContainer";
import Parrafo from "../components/Parrafo";

export default function Politicas() {
    const { i18n } = useTranslation();

    return (
        <div>
            {i18n.language == "es" ? (
                <MainContainer className={"py-[80px] max-w-5xl"}>
                    <AnimatedTextWord
                        text={"Políticas de privacidad"}
                        className="leading-[1.1] mb-[55px] lg:mb-[80px] xl:text-[70px] justify-center items-center"
                    />

                    <Parrafo className="text-left mb-[30px]">
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        respeta su derecho de privacidad. Esta política resume
                        qué información personal podemos recoger, de qué manera
                        podemos utilizar esta información y otros temas
                        importantes relacionados con su privacidad y protección
                        de datos.
                    </Parrafo>
                    <Parrafo className="text-left mb-[30px]">
                        Es política de{" "}
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        cumplir con todas las leyes de privacidad y de
                        protección de datos vigentes. Este compromiso refleja el
                        valor que le damos al hecho de obtener y conservar la
                        confianza de nuestros clientes, socios comerciales y
                        demás personas que comparten su información personal con
                        nosotros.
                    </Parrafo>
                    <Parrafo className="text-left mb-[10px]">
                        Esta Política se aplica a todos los sitios de Internet y
                        aplicaciones móviles administrados por{" "}
                        <span className="font-bold">AR Capital SA de CV</span> o
                        en su nombre, e incluye las compañías de{" "}
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        de todo el mundo (conocidas como “sitio de internet o
                        aplicación móvil de{" "}
                        <span className="font-bold">AR Capital SA de CV</span>
                        ”). También se aplica a toda la información personal que{" "}
                        <span className="font-bold">
                            AR Capital SA de CV
                        </span>{" "}
                        pueda recoger de cualquier otro modo:
                    </Parrafo>
                    <ul className="mb-[30px]">
                        <li>
                            <Parrafo className="text-left mb-[10px]">
                                1. A través de nuestros productos y servicios.
                            </Parrafo>
                        </li>
                        <li>
                            <Parrafo className="text-left mb-[10px]">
                                2. Cuando interactúa con nosotros por medios
                                distintos de un sitio de internet o aplicación
                                móvil de{" "}
                                <span className="font-bold">
                                    AR Capital SA de CV
                                </span>
                                , por ejemplo, de manera presencial, por
                                teléfono o en una feria de muestras o formación.
                            </Parrafo>
                        </li>
                        <li>
                            <Parrafo className="text-left mb-[0px]">
                                3. A través de nuestros clientes,
                                distribuidores, proveedores, vendedores y otros
                                socios comerciales (en conjunto, “socios
                                comerciales”).
                            </Parrafo>
                        </li>
                    </ul>
                    <Parrafo className="text-left mb-[30px]">
                        No obstante, los sitios de Internet, aplicaciones
                        móviles, productos y servicios de{" "}
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        pueden tener fines y características distintas. Si se
                        necesita proporcionar información adicional o diferente
                        para un determinado sitio de internet, aplicación móvil,
                        producto o servicio específico de{" "}
                        <span className="font-bold">AR Capital SA de CV</span>,
                        se publicará dicha obligación por separado en el sitio
                        de internet, aplicación móvil, producto o servicio que
                        sea pertinente. Cada una de estas obligaciones de
                        proporcionar información adicionales, políticas o
                        declaraciones de privacidad específicas (“Declaración de
                        Privacidad Específica”) complementan y enmiendan esta
                        Política.
                    </Parrafo>
                </MainContainer>
            ) : (
                <MainContainer className={"py-[80px] max-w-5xl"}>
                    <AnimatedTextWord
                        text={"Privacy policy"}
                        className="leading-[1.1] mb-[55px] lg:mb-[80px] xl:text-[70px] justify-center items-center"
                    />

                    <Parrafo className="text-left mb-[30px]">
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        respects your right to privacy. This policy outlines
                        what personal information we may collect, how we may use
                        this information, as well as other important issues
                        regarding your privacy and data protection.
                    </Parrafo>
                    <Parrafo className="text-left mb-[30px]">
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        has the policy of complying with all current privacy and
                        data protection laws. This commitment reflects the value
                        we place on earning and keeping the trust of our
                        customers, business partners, and anyone who shares
                        their personal information with us
                    </Parrafo>
                    <Parrafo className="text-left mb-[10px]">
                        This Policy applies to all Internet sites and mobile
                        applications operated by or on behalf of AR Capital SA
                        de CV, and includes{" "}
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        companies worldwide (known as “Website or Mobile
                        Application from{" "}
                        <span className="font-bold">AR Capital SA de CV</span>
                        ”). It also applies to all personal information that{" "}
                        <span className="font-bold">
                            AR Capital SA de CV
                        </span>{" "}
                        may otherwise collect:
                    </Parrafo>
                    <ul className="mb-[30px]">
                        <li>
                            <Parrafo className="text-left mb-[10px]">
                                1. Through our products and services.
                            </Parrafo>
                        </li>
                        <li>
                            <Parrafo className="text-left mb-[10px]">
                                2. Through interaction by means other than a
                                website or application for mobile phone from{" "}
                                <span className="font-bold">
                                    AR Capital SA de CV
                                </span>
                                . For example, in person, by phone or in a trade
                                fair or training.
                            </Parrafo>
                        </li>
                        <li>
                            <Parrafo className="text-left mb-[0px]">
                                3. Through our customers, distributors,
                                suppliers, vendors and other business partners
                                (collectively known as “business associates”).
                            </Parrafo>
                        </li>
                    </ul>
                    <Parrafo className="text-left mb-[30px]">
                        However, the Internet sites, mobile applications,
                        products and services of{" "}
                        <span className="font-bold">AR Capital SA de CV</span>{" "}
                        may have different purposes and characteristics. If it
                        is necessary to provide additional or different
                        information for a specific website, mobile application,
                        product or service of{" "}
                        <span className="font-bold">AR Capital SA de CV</span>,
                        said obligation will be published separately on the
                        relevant website, mobile application, product or
                        service. Each of these additional information
                        obligations, specific privacy policies or statements
                        (“Specific Privacy Statement”) supplement and amend this
                        Policy.
                    </Parrafo>
                </MainContainer>
            )}
        </div>
    );
}
