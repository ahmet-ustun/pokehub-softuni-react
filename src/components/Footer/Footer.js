import './Footer.css';

const Footer = () => {
    return (
        <div id="footer" className="nes-container is-dark">
            <span>This is a React project created by Ahmet Ustun for the SoftUni React exam.</span>
            <div>
                <a href="mailto:ahmetustunt@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/dusk/64/000000/gmail.png" alt="Gmail" />
                </a>
                <a href="https://www.linkedin.com/in/ahmet-ustun/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/dusk/64/000000/linkedin--v1.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/ahmet-ustun" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/dusk/64/000000/github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

export default Footer;