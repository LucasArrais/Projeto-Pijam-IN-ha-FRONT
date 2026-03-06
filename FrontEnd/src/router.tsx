import { createBrowserRouter } from "react-router-dom";
import PijamasPage from "./pages/PijamasPage";
import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./RootLayout";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />

            },
            {
                path: "pijamas",
                element: <PijamasPage />
            },
            {
                path: "feedback",
                element: <FeedbackPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "cadastro",
                element: <RegisterPage />
            },
            {
                path: "pijama"
                //element: <PijamaPage /> 
            }
        ]
    }
])

export default router;