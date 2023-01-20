import React from "react";

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
        </React.StrictMode>
    )
}

function Footer() {
    return (
        <React.StrictMode>
            <div class="header">
                <a href="#default" class="logo">CompanyLogo</a>
                <div class="header-right">
                    <a class="active" href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </React.StrictMode>
    );
}

export { Header, Footer };