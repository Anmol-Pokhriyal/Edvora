import React from "react";

function Footer() {
const year= new Date().getFullYear();
    return (
        <div>
    <footer>
    <p>Copyright@edvora{year}</p>
    </footer>
    </div>
);
}
export default Footer;