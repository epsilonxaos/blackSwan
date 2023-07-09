import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Capital from "./pages/Capital";
import Home from "./pages/Home";
import Hospitalary from "./pages/Hospitalary";
import RealState from "./pages/RealState";

export default function Web() {
    return (
        <>
            <Header />
            {/* <Home /> */}
            <Hospitalary />
            <Footer />
        </>
    );
}
