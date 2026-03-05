import { createBrowserRouter } from "react-router-dom";
import PijamasPage from "./pages/PijamasPage";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                //nosso site vai se iniciar pela home, quando fizer a home, descomenta isso para funcionar a rota.
                //index: true,
                //element: <Home /> --nao esqueça de importar a funçao e nome deve ser igual a do index.tsx da HomePage
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
                //path: "/exemplo"
                //element: <PageExmp /> 
            }
        ]
    }
])

export default router;