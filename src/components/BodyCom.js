import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContanier";
const BodyCom = () => {
    return(
        <div className="flex gap-8">
        <Sidebar/>
        <MainContainer/>
        </div>
    )
}
export  default BodyCom;