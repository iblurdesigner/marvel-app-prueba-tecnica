import { Route, Routes } from "react-router-dom"
import { routes } from "./routerConfig"

export const AppRouter = () => { 
  return (
    <Routes>
      {
        routes.map((route: any, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))
      }
    </Routes>
  )
}