import { createBrowserRouter } from "react-router-dom";
import PijamasPage from "./pages/PijamasPage";

const router = createBrowserRouter([
    {   //nosso site vai se iniciar pela home, quando fizer a home, descomenta isso para funcionar a rota.
        //path: "/",
        //element: <Home />
    },
    {
        path: "/pijamas",
        element: <PijamasPage />
    },
    {
        //path: "/carrinho"
        //element: <nome da função exportada da página carrinho>
    },
    {
        //path: "/"
    }

])

export default router;