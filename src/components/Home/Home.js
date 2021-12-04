import './Home.css';

const Home = () => {
    return (
        <div id="home" className="nes-container is-dark">
            <h2>Welcome to Poké Hub!</h2>
            <p>
                This is a React project created by Ahmet Ustun for the SoftUni React exam.
            </p>
            <p>
                Login to catch new Pokémon each day or see your collection. Otherwise you can check the Pokedex.
            </p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" alt="Bulbasaur Gif" />
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" alt="Charmander Gif" />
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="Squirtle Gif" />
        </div>
    );
}

export default Home;