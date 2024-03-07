import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const BodyCom = () => {
    return(
        <div className="flex gap-8">
        <Sidebar/>
        <Outlet/>
        </div>
    )
}
export  default BodyCom;