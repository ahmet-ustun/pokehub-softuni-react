import './Pokedex.css';

import { pokemonList } from '../../database/pokemonList.js';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NoResult from '../NoResult/NoResult.js';
import { letterList } from '../Sidebar/Sidebar.js';
import { NotFound2 } from '../NotFound/NotFound.js';

const Result = ({ pokemon, picStyle }) => {

    const { letter } = useParams();

    const name = pokemon.name
        .toLowerCase();

    const code = pokemon.code
        .toString()
        .padStart(3, '0');

    const img = picStyle === 'png'
        ? pokemon.logopng
        : pokemon.logogif;

    return (
        <Link to={`/pokedex/${letter}/${name}`} className="nes-container">
            <img className={picStyle} src={img} alt={pokemon.name} />
            <span>{`#${code}`}</span>
            <span>{pokemon.name}</span>
        </Link>
    );
}

const Output = ({ picStyle }) => {

    const { letter } = useParams();

    const outputList = pokemonList.filter(x => {
        const pokeName = x.name.toLowerCase();
        return pokeName.startsWith(letter)
    });

    return outputList.length === 0
        ? <NoResult />
        : outputList.map(x => <Result pokemon={x} picStyle={picStyle} key={x.name} />);
}

const Pokedex = () => {

    const [value, setValue] = useState('png');
    const { letter } = useParams();

    if (!letterList.includes(letter.toUpperCase())) {
        return <NotFound2 />
    };

    function handleChange() {
        value === 'png'
            ? setValue('gif')
            : setValue('png');
    };

    return (
        <div id="pokedex" className="nes-container is-dark">

            <div className="toolbar">
                <div className="animation">
                    <label>
                        <input type="radio" className="nes-radio is-dark" name="answer-dark" checked={value === 'png'} onChange={handleChange} />
                        <span>Retro</span>
                    </label>

                    <label>
                        <input type="radio" className="nes-radio is-dark" name="answer-dark" checked={value === 'gif'} onChange={handleChange} />
                        <span>Modern</span>
                    </label>
                </div>

                <div className="nes-field">
                    <img src="https://img.icons8.com/dusk/64/000000/google-web-search.png" alt="Search" />
                    <input type="text" id="search" className="nes-input" />
                </div>
            </div>

            <div className="pokemon-list">
                <Output picStyle={value} />
            </div>
        </div>
    );
}

export default Pokedex;