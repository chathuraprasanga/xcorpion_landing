import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';

import { MantineProvider } from "@mantine/core";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import WebLayout from "./layouts/WebLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import { NotFoundImage } from "./components/404/NotFoundImage.tsx";
import ContactUsPage from "./pages/ContactUsPage.tsx";

// Define the router
const router = createBrowserRouter([
    {
        path: "/",
        element: <WebLayout />,
        children: [
            {
                path: "home",
                element: <HomePage/>
            },{
                path: "contact-us",
                element: <ContactUsPage/>
            },
            {
                path: "*",
                element: <NotFoundImage/>
            },
            {
                path: "",
                element: <Navigate to="/home" replace />
            }
        ],
    },
    {
        path: "*",
        element: <NotFoundImage/>
    }
]);

// Render the application
createRoot(document.getElementById("root")!).render(
    <MantineProvider>
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    </MantineProvider>
);
