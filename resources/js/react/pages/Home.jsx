import MainContainer from "../components/MainContainer";

import frasePrincipal from "../../../img/web/frase-principal.svg";
import frasePrincipalDesk from "../../../img/web/frase-principal-desk.svg";
import cisnePrincipal from "../../../img/web/cisne-banner.svg";

export default function Home() {
    return (
        <main>
            <div className="bg-[#CCCCCD]">
                <MainContainer
                    className={
                        "h-[calc(100vh-64px)] sm:h-[calc(100vh-67px)] pt-[55px] pb-[35px] px-0"
                    }
                >
                    <div className="flex flex-col lg:flex-row justify-between sm:justify-start lg:justify-between h-full">
                        <div className="w-full">
                            <img
                                className="lg:hidden w-[80%] max-w-[320px] sm:max-w-[520px] mx-auto sm:ml-0"
                                src={frasePrincipal}
                                alt="Hacemos que suceda lo inesperado"
                            />
                            <img
                                className="hidden lg:block w-[95%]"
                                src={frasePrincipalDesk}
                                alt="Hacemos que suceda lo inesperado"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                className="relative w-[90%] lg:w-full max-w-[320px] sm:max-w-[380px] lg:max-w-max sm:-top-[50px] sm:-right-[30px] lg:top-0  ml-auto mx-0"
                                src={cisnePrincipal}
                                alt="Cisne negro"
                            />
                        </div>
                    </div>
                </MainContainer>
            </div>
        </main>
    );
}
