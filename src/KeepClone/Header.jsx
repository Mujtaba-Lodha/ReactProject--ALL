import React from "react";
import logo from '../KeepClone/images/whitelogo.png';

const Header = () => {

    return(
        <>
           <div className="header">
                <img src={logo} alt="logo"/>
                <h1>Lodha Keep</h1>
           </div>
        </>
    )
};
export default Header;