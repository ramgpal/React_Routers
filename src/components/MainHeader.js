import React from "react";
import { Outlet } from "react-router-dom";

const MainHeader = () => {
    return (
        <div>
        {/* This is Home Page */}
        <Outlet/>
        </div>
    )
}

export default MainHeader;