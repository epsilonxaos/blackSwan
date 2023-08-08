import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Capital from "./pages/Capital";
import Home from "./pages/Home";
import Hospitalary from "./pages/Hospitalary";
import RealState from "./pages/RealState";
import Nosotros from "./pages/Nosotros";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Transition from "./animations/transitions";
import Politicas from "./pages/Politicas";
import { useEffect, useReducer } from "react";
import axios from "axios";
import AppContext from "./context/AppContext";

export default function Web() {
    const location = useLocation();
    const reducer = (prev, next) => ({ ...prev, ...next });
    const initialArgs = {
        loading: true,
        website: null,
        textsi18n: null,
    };
    const [state, dispatch] = useReducer(reducer, initialArgs);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                import.meta.env.VITE_APP_URL + "api/inicial"
            );
            dispatch({
                website: response.data.website,
                textsi18n: response.data.textsi18n,
            });
            setTimeout(() => {
                dispatch({ loading: false });
            }, 1500);
        }
        fetchData();
    }, []);

    if (state.loading)
        return (
            <div className="h-screen w-full bg-black text-white flex items-center justify-center">
                Cargando...
            </div>
        );

    return (
        <div className="min-h-screen pt-[64px] sm:pt-[67px]">
            <AppContext.Provider value={{ state, dispatch }}>
                <Header />
                <AnimatePresence mode="wait">
                    <ScrollToTop />
                    <Routes location={location} key={location.pathname}>
                        <Route
                            index
                            element={
                                <Transition>
                                    <Home />
                                </Transition>
                            }
                        />
                        <Route
                            path="/capital"
                            element={
                                <Transition>
                                    <Capital />
                                </Transition>
                            }
                        />
                        <Route
                            path="/real-state"
                            element={
                                <Transition>
                                    <RealState />
                                </Transition>
                            }
                        />
                        <Route
                            path="/hospitality"
                            element={
                                <Transition>
                                    <Hospitalary />
                                </Transition>
                            }
                        />
                        <Route
                            path="/nosotros"
                            element={
                                <Transition>
                                    <Nosotros />
                                </Transition>
                            }
                        />
                        <Route
                            path="/politicas"
                            element={
                                <Transition>
                                    <Politicas />
                                </Transition>
                            }
                        />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}
