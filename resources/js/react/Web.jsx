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

export default function Web() {
    const location = useLocation();

    return (
        <>
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
        </>
    );
}
