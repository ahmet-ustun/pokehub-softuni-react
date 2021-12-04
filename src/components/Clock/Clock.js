import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {

    const [time, setTime] = useState(new Date());

    function refreshClock() {
        setTime(new Date());
      }

    useEffect(() => {
        
        const timerId = setInterval(refreshClock, 1000);
        
        return function cleanup() {
            clearInterval(timerId);
          };
    }, []);

    return (
        <div id="clock" className="nes-container is-dark">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" alt="Pikachu Gif" />
            <p>{time.toLocaleDateString('en-GB')}</p>
            <p>{time.toLocaleTimeString('en-GB')}</p>
        </div>
    );
}

export default Clock;