import MainContainer from "../components/MainContainer";
import { LiaRegistered } from "react-icons/lia";
import Parrafo from "../components/Parrafo";
import parse from "html-react-parser";
import cisne from "../../../img/web/cisne-banner.svg";
import raulyjacobo from "../../../img/web/raulyjacobo.png";
import equipobs from "../../../img/web/equipobs.jpg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import TextCustom from "../components/TextCustom";
import { BiRegistered } from "react-icons/bi";

export default function Nosotros() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();
    return (
        <main>
            {/* Banner principal */}
            <div className="bg-[#7a7977] bg-center bg-cover bg-no-repeat bg-blend-darken bgNosotros">
                <MainContainer
                    className={
                        " pt-[55px] pb-[35px] px-3 min-h-[650px] lg:h-[calc(100vh-68px)] lg:max-h-[870px]"
                    }
                >
                    <div className="flex items-center h-full">
                        <div className="max-w-max text-white">
                            <p className="mb-[30px] lg:mb-[60px] xl:mb-[90px]">
                                (MX)
                            </p>
                            <div className="flex">
                                <BiRegistered className="text-[20px] lg:text-[26px] inline relative top-[10px] left-0" />
                                {/* <LiaRegistered className="text-[30px] lg:text-[35px] inline relative top-[-12px] lg:top-[-22px] xl:top-[-28px]" />{" "} */}
                                <TextCustom
                                    className="font-medium text-[50px] lg:text-[90px] tracking-[-1.5px] leading-[1.1] mb-1"
                                    textParse={
                                        state.textsi18n[i18n.language]
                                            .about_s1_title
                                    }
                                />
                            </div>

                            <h3 className="font-medium text-[13px] lg:text-[18px] xl:text-[24px] tracking-[1.95px] uppercase mb-[25px] lg:mb-[45px]">
                                {
                                    state.textsi18n[i18n.language]
                                        .about_s1_subtitle
                                }
                            </h3>
                            <div className="border-t-2 border-t-white w-[48px]"></div>
                        </div>
                    </div>
                </MainContainer>
            </div>

            {/* Raul y jacobo */}
            <MainContainer className={"px-0 lg:pr-0 py-[25px] lg:pb-0"}>
                <div
                    className="flex flex-col lg:flex-row lg:items-center"
                    id="historia"
                >
                    <div className="w-full mb-[30px] lg:mb-0 lg:w-1/2 px-[40px] sm:pl-0">
                        <Parrafo className="mb-[30px] font-bold text-[24px] xl:text-[28px] text-left">
                            {state.textsi18n[i18n.language].about_s2_title}
                        </Parrafo>
                        <div className="text-parrafos">
                            {parse(
                                state.textsi18n[i18n.language].about_s2_info
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mb-[25px] px-[40px] md:px-0 lg:mb-0">
                        <img
                            src={
                                import.meta.env.VITE_APP_URL +
                                state.website.about_s2_bg
                            }
                            alt="Raúl y Jacobo"
                            className="bg-white w-full h-[500px] lg:h-[850px] object-contain max-w-[670px] mx-auto lg:mr-0"
                        />
                    </div>
                </div>
            </MainContainer>

            {/* Equipo */}
            <MainContainer className={"!px-0"}>
                <img
                    src={
                        import.meta.env.VITE_APP_URL + state.website.about_s3_bg
                    }
                    alt="Equipo Black Swan"
                    className="aspect-video object-contain"
                    id="quienesSomos"
                />
                <div className="pt-[50px] pb-[70px] px-[40px] sm:px-[30px] max-w-[1100px] mx-auto">
                    <Parrafo
                        className="mb-[30px] lg:mb-[45px] text-[24px] lg:text-[28px] text-center"
                        textParse={
                            state.textsi18n[i18n.language].about_s3_title
                        }
                    />
                    <div className="text-parrafos pb-[75px]">
                        {parse(state.textsi18n[i18n.language].about_s3_info)}
                    </div>

                    <Parrafo
                        className="mb-[30px] lg:mb-[45px] text-[24px] lg:text-[28px] text-center"
                        textParse={t("nosotros.valores")}
                    />

                    <div className="flex flex-col lg:flex-row" id="valores">
                        <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-6">
                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.0")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.1")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.2")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.3")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.4")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.5")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.6")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.7")}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6">
                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.8")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.9")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.10")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.11")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.12")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.13")}
                            />

                            <Parrafo
                                className="text-left mb-0 font-bold"
                                textParse={t("valores.14")}
                            />
                            <Parrafo
                                className="text-left mb-[30px]"
                                textParse={t("valores.15")}
                            />
                        </div>
                    </div>
                </div>
            </MainContainer>
        </main>
    );
}
