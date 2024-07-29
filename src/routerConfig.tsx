import { Detail, History, Home } from "./pages";

export const routes = [
    {
        path: "/",
        element: <Home />,
        name: "Home",
    },
    {
        path: "/detail/:id",
        element: <Detail />,
        name: "Detalle",
    },
    {
        path: "/history",
        element: <History />,
        name: "Historico",
    }
]