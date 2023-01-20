import React from 'react' //rafce shortcut

const Footer = () => {
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
    )
}

export default Footer
