import { createBrowserRouter } from "react-router-dom";
import PijamasPage from "./pages/PijamasPage";
import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";
import RootLayout from "./RootLayout";

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
                //path: "/exemplo"
                //element: <PageExmp /> 
            }
        ]
    }
])

export default router;