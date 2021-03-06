import './Pokedex.css';

import { pokemonList } from '../../database/pokemonList.js';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NoResult from '../NoResult/NoResult.js';
import { letterList } from '../Sidebar/Sidebar.js';
import { NotFound2 } from '../NotFound/NotFound.js';

const Result = ({ pokemon, picStyle }) => {

    const name = pokemon.name
        .toLowerCase();

    const code = pokemon.code
        .toString()
        .padStart(3, '0');

    const img = picStyle === 'png'
        ? pokemon.logopng
        : pokemon.logogif;

    return (
        <Link to={`/pokedex/name/${name}`} className="nes-container">
            <img
                className={picStyle}
                src={img}
                alt={pokemon.name}
            />
            <span>{`#${code}`}</span>
            <span>{pokemon.name}</span>
        </Link>
    );
}

const Output = ({ picStyle, searchValue }) => {

    const { letter } = useParams();

    const outputList = pokemonList.filter(x => {
        const pokeName = x.name.toLowerCase();
        return pokeName.startsWith(letter)
    });

    const searchList = outputList.filter(x => {
        const a = x.name.toLowerCase();
        const b = searchValue.toLowerCase();
        return a.includes(b);
    });

    return searchList.length === 0
        ? <NoResult />
        : searchList.map(x => <Result pokemon={x} picStyle={picStyle} key={x.name} />);
}

const Pokedex = () => {

    const [value, setValue] = useState('png');
    const { letter } = useParams();
    const [searchValue, setSearchValue] = useState('');

    if (!letterList.includes(letter.toUpperCase())) {
        return <NotFound2 />
    };

    function handleChange() {
        value === 'png'
            ? setValue('gif')
            : setValue('png');
    };

    function searchPokemon(e) {
        setSearchValue(e.target.value);
    }

    return (
        <div id="pokedex" className="nes-container is-dark">
            <div className="toolbar">
                <div className="animation">
                    <label>
                        <input
                            type="radio"
                            className="nes-radio is-dark"
                            name="answer-dark"
                            checked={value === 'png'}
                            onChange={handleChange}
                        />
                        <span>Retro</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            className="nes-radio is-dark"
                            name="answer-dark"
                            checked={value === 'gif'}
                            onChange={handleChange}
                        />
                        <span>Modern</span>
                    </label>
                </div>
                <div className="nes-field">
                    <img src="https://img.icons8.com/dusk/64/000000/google-web-search.png" alt="Search" />
                    <input
                        type="text"
                        id="search"
                        className="nes-input"
                        value={searchValue}
                        onChange={searchPokemon}
                    />
                </div>
            </div>
            <div className="pokemon-list">
                <Output picStyle={value} searchValue={searchValue} />
            </div>
        </div>
    );
}

export {
    Pokedex,
    Result
};