import './Pokedex.css';

import { pokemonList } from '../../database/pokemonList.js';
import { useParams } from 'react-router';

const Pokemon = ({ pokemon }) => {

    return (
        <div className="nes-container is-dark">
            <img src={pokemon.logogif} alt={pokemon.name} />
            <span>{`#${pokemon.code}`}</span>
            <span>{pokemon.name}</span>
        </div>
    );
}

const Pokedex = () => {

    const { letter } = useParams();

    const outputList = pokemonList.filter(x => {
        const pokeName = x.name.toLowerCase();
        return pokeName.startsWith(letter)
    });

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
                {outputList.map(x => <Pokemon pokemon={x} key={x.name} />)}
            </div>
        </div>
    );
}

export default Pokedex;