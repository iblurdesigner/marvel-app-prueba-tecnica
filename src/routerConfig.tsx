import { Detail, Home } from "./pages";

export const routes = [
    {
        path: "/",
        element: <Home />,
        name: "Home",
    },
    {
        path: "/detail",
        element: <Detail />,
        name: "Detail",
    }
]