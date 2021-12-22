import './Catch.css';

import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.js';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebase.js';
import { pokemonList } from '../../database/pokemonList.js';

function getRandomCode(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Image = ({ isLoading, isFound }) => {

    if (!isLoading && !isFound) {
        return <img className='pokemon' src="/assets/catch/MissingNo.png" alt="Target" />;
    } else if (isLoading && !isFound) {
        return <img className='pokemon' src="/assets/catch/MissingNo.gif" alt="Catching" />;
    } else if (!isLoading && isFound) {
        return <img className='pokemon' src={`/assets/gif/${isFound}.gif`} alt="Caught" />;
    }
}

const Catch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isFound, setIsFound] = useState(undefined);
    const { currentUser } = useContext(AuthContext);

    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const user = currentUser.uid;

    async function catchPokemon() {

        try {
            const docRef = doc(db, "users", user);
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data();

            if (docData.collection.length === 151) {
                setIsLoading(false);
                setIsFound(undefined);
                alert('You have caught all the Pokémon!');

            } else {

                if (docData.lastCaught === date) {
                    setIsLoading(false);
                    setIsFound(undefined);
                    alert('You caught a Pokémon for today!');

                } else {
                    setIsLoading(true);
                    setIsFound(undefined);
                    let searchCode = getRandomCode(1, 151);

                    while (docData.collection.includes(searchCode)) {
                        searchCode = getRandomCode(1, 151);
                    }

                    await setDoc(docRef, {
                        lastCaught: date,
                        collection: [...docData.collection, searchCode]
                    });

                    setIsLoading(false);
                    setIsFound(searchCode);
                    const pokemonName = pokemonList[searchCode - 1].name;
                    alert(`Gotcha! ${pokemonName.toUpperCase()} was caught!`);
                }
            }

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div id="catch" className="nes-container is-dark">
            <div className="nes-container is-rounded">
                <Image isLoading={isLoading} isFound={isFound} />
                <img
                    className='trainer'
                    src="/assets/catch/Trainer.png"
                    alt="Trainer"
                />
            </div>
            <button
                type="button"
                onClick={catchPokemon}
                className="nes-btn is-success"
                disabled={isLoading}
            >{isLoading ? "Loading" : "Catch"}</button>
        </div>
    );
}

export default Catch;