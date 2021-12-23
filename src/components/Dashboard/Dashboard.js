import './Dashboard.css';

import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';
import { pokemonList } from '../../database/pokemonList.js';
import { Result } from '../Pokedex/Pokedex.js';

const Counter = ({ userEmail, userData, isLoading, isMistake }) => {

    const caught = userData.length;
    const total = pokemonList.length;
    const percent = Math.round(caught / total * 100);

    return (
        <div className='counter'>
            {
                isMistake
                    ? <span style={{ color: '#E3350D' }}>Something went wrong!</span>
                    : <span>Progress: {isLoading
                        ? 'Loading'
                        : `${percent}%`
                    }</span>
            }
            <span>{userEmail}</span>
            <progress
                className="nes-progress is-success"
                value={caught}
                max={total}
            ></progress>
        </div>
    );
}

const Collected = ({ userData, isLoading, isMistake }) => {

    const outputList = pokemonList.filter(x => {
        return userData.includes(x.code);
    });

    return (
        <div className='collected'>
            {
                isMistake
                    ? <span style={{ color: '#E3350D' }}>Something went wrong!</span>
                    : <>
                        <div className="nes-badge">
                            <span className="is-warning">Collection:</span>
                        </div>
                        <div className='result'>
                            {
                                isLoading
                                    ? <span>Loading</span>
                                    : outputList.length === 0
                                        ? <span style={{ color: '#E3350D', gridColumn: '1 / 3' }}>You don't have any Pokémon!</span>
                                        : outputList.map(x => <Result pokemon={x} picStyle="png" key={x.name} />)
                            }
                        </div>
                    </>
            }
        </div>
    );
}

const Dashboard = () => {

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMistake, setIsMistake] = useState(false);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {

        setUserData([]);
        setIsLoading(true);
        setIsMistake(false);

        const user = currentUser.uid;

        (async () => {

            try {
                const docRef = doc(db, "users", user);
                const docSnap = await getDoc(docRef);
                const docData = docSnap.data();

                setUserData(docData.collection);
                setIsLoading(false);
                setIsMistake(false);

            } catch (error) {
                setUserData([]);
                setIsLoading(false);
                setIsMistake(error.message);
            }
        })();

        return null;
    }, [currentUser]);

    return (
        <div id="dashboard" className="nes-container is-dark">
            <Counter
                userEmail={currentUser.email}
                userData={userData}
                isLoading={isLoading}
                isMistake={isMistake}
            />
            <Collected
                userData={userData}
                isLoading={isLoading}
                isMistake={isMistake}
            />
        </div>
    );
}

export default Dashboard;