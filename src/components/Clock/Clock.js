import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    return (
        <div id="clock" className="nes-container is-dark">
            <p>{time.toLocaleDateString('en-GB')}</p>
            <p>{time.toLocaleTimeString('en-GB')}</p>
        </div>
    );
}

export default Clock;