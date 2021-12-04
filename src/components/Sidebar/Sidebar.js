import './Sidebar.css';
import { Link } from 'react-router-dom';

const ButtonList = () => {

    const letterList = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return letterList.map(letter => {
        return (
            <Link to={`/pokedex/${letter.toLowerCase()}`} className="nes-btn is-primary" key={letter}>
                {letter}
            </Link>
        )

        //TODO: I have to find a way to make this a link.
    });
}

const Sidebar = () => {
    
    return (
        <div id="sidebar" className="nes-container with-title is-centered is-dark">
            <p className="title">Pokédex</p>
            <ButtonList />
        </div>
    );
}

export default Sidebar;