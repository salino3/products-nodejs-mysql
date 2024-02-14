import { Route, Routes } from "react-router-dom"
import { HomeLayout, ProductInfoLayout } from "@/layout";
import { SwitchRoutes } from "./interface"

export const AppRouter: React.FC = () => {

    return (
      <Routes>
        <Route path={SwitchRoutes.root} element={<HomeLayout />} />
        <Route path={`${SwitchRoutes.productInfo}/:id`} element={<ProductInfoLayout />} />
      </Routes>
    );
}