import './Pokedex.css';

import { pokemonList } from '../../database/pokemonList.js';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {

    const { letter } = useParams(); 
    
    const name = pokemon.name
        .toLowerCase();
    
    const code = pokemon.code
        .toString()
        .padStart(3, '0');

    return (
        <Link to={`/pokedex/${letter}/${name}`} className="nes-container is-dark">
            <img src={pokemon.logogif} alt={pokemon.name} />
            <span>{`#${code}`}</span>
            <span>{pokemon.name}</span>
        </Link>
    );
}

const Output = () => {

    const { letter } = useParams();

    const outputList = pokemonList.filter(x => {
        const pokeName = x.name.toLowerCase();
        return pokeName.startsWith(letter)
    });

    return outputList.length === 0
        ? 'TODO'
        : outputList.map(x => <Pokemon pokemon={x} key={x.name} />);
}

const Pokedex = () => {

    return (
        <div id="pokedex" className="nes-container is-dark">

            <div className="toolbar">
                <div className="animation">
                    <label>
                        <input type="radio" className="nes-radio is-dark" name="answer-dark" checked />
                        <span>PNG</span>
                    </label>

                    <label>
                        <input type="radio" className="nes-radio is-dark" name="answer-dark" />
                        <span>GIF</span>
                    </label>
                </div>

                <div className="nes-field">
                    <img src="https://img.icons8.com/dusk/64/000000/google-web-search.png" alt="Search" />
                    <input type="text" id="search" className="nes-input" />
                </div>
            </div>

            <div className="pokemon-list">
                <Output />
            </div>
        </div>
    );
}

export default Pokedex;