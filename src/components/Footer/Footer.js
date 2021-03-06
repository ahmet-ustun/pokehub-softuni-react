import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {

    const link1 = { pathname: "mailto:ahmetustunt@gmail.com" };
    const link2 = { pathname: "https://www.linkedin.com/in/ahmet-ustun" };
    const link3 = { pathname: "https://github.com/ahmet-ustun" };

    return (
        <div id="footer" className="nes-container is-dark">
            <span>All content is © Nintendo and The Pokémon Company.</span>
            <div>
                <span>A React project created by Ahmet Ustun.</span>
                <Link
                    to={link1}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/assets/footer/Gmail.png" alt="Gmail" />
                </Link>
                <Link
                    to={link2}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/assets/footer/LinkedIn.png" alt="LinkedIn" />
                </Link>
                <Link
                    to={link3}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/assets/footer/GitHub.png" alt="GitHub" />
                </Link>
            </div>
        </div>
    );
}

export default Footer;