import './Pokemon.css';

import { useParams } from 'react-router';
import { pokemonList } from '../../database/pokemonList.js';

const Result = ({ pokemon }) => {

    const code = pokemon.code
        .toString()
        .padStart(3, '0');

    return (
        <div id="pokemon-self">
            <img src={pokemon.img} alt={pokemon.name} />
            <span>{`#${code} ${pokemon.name}`}</span>
            <p>{pokemon.description}</p>
            <div>
                <span>Type:</span>
                <ul>
                    {pokemon.type.map(x => <li key={x}>{x}</li>)}
                </ul>
            </div>
        </div>
    );
}

const Output = ({ pokemon }) => {
    return pokemon
        ? <Result pokemon={pokemon} />
        : '404';
}

const Pokemon = () => {

    const { pokemon } = useParams();

    const output = pokemonList.find(x => {
        const pokeName = x.name.toLowerCase();
        return pokeName === pokemon;
    });

    console.log(output)



    return (
        <div id="pokemon" className="nes-container is-dark">
            <Output pokemon={output} />
        </div>
    );
}

export default Pokemon;