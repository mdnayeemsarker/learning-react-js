import React from "react";

const Header = () => {
    return (
        <div class="header">
            <h2>Header</h2>
            <div class="header-right">
                <a class="active" href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
        </div>
    )
}

export default Header;