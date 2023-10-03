import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <>
            <footer>
                <p>copyright  © {year} <a href="https://www.linkedin.com/in/lodha-mujtaba-924989199/" target="_blank">mujidev.</a></p>
            </footer>
        </>
    )
}

export default Footer;