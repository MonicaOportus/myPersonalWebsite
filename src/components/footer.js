import React from "react";

export default function Footer(){

    const date = new Date();
    let thisYear = date.getFullYear();

    return(
        <footer id="footer">
            <div>
            <a href="https://www.linkedin.com/in/monica-oportus-01556b23a/">
                <i class="footer-icon fa-lg fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/MonicaOportus/">   
                <i class="footer-icon fa-lg fa-brands fa-github"></i>
            </a> 
            <a href="/contact">
                <i className="footer-icon fa-lg fa-solid fa-envelope"></i>
            </a>
                <p>© {thisYear} Copyright</p>
            </div>
        </footer>
    );
}
