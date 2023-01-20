import React from "react";
import Footer from "./Footer";

const Header = () => {
    return (
        <React.StrictMode>
            <div class="header">
                <a href="#default" class="logo">CompanyLogo</a>
                <div class="header-right">
                    <a class="active" href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                </div>
                <div>
                    <h1>Responsive Header</h1>
                    <p>Resize the browser window to see the effect.</p>
                    <p>Some content..</p>
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    )
}

export default Header;