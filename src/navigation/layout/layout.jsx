import React from "react";
import { Header } from "../header/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <div className="LayoutMainWrap">
            <Header/>
            <Outlet/>
        </div>
    )
}