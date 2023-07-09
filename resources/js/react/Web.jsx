import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Capital from "./pages/Capital";
import Home from "./pages/Home";
import RealState from "./pages/RealState";

export default function Web() {
    return (
        <>
            <Header />
            {/* <Home /> */}
            <RealState />
            <Footer />
        </>
    );
}
