import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Capital from "./pages/Capital";
import Home from "./pages/Home";
import Hospitalary from "./pages/Hospitalary";
import RealState from "./pages/RealState";
import Nosotros from "./pages/Nosotros";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
    {
        element: (
            <>
                <ScrollToTop />
                <Header />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/capital",
                element: <Capital />,
            },
            {
                path: "/real-state",
                element: <RealState />,
            },
            {
                path: "/hospitality",
                element: <Hospitalary />,
            },
            {
                path: "/nosotros",
                element: <Nosotros />,
            },
        ],
    },
]);

export default function Web() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
