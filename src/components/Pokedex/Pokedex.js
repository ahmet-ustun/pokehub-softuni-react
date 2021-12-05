import './Pokedex.css';

const Pokedex = () => {
    return (
        <div id="pokedex" className="nes-container is-dark">

            <div className="toolbar">
                <div className="animation">
                    <label>
                        <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
                        <span>PNG</span>
                    </label>

                    <label>
                        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
                        <span>GIF</span>
                    </label>
                </div>

                <div class="nes-field">
                    <img src="https://img.icons8.com/dusk/64/000000/google-web-search.png" alt="Search" />
                    <input type="text" id="search" class="nes-input" />
                </div>
            </div>

            <div className="pokemon-list">

            </div>
        </div>
    );
}

export default Pokedex;