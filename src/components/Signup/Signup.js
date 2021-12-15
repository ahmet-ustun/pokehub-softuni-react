import './Signup.css';

import { useState } from 'react';
import emailValidator from 'email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useHistory } from 'react-router-dom';

const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerRePassword, setRegisterRePassword] = useState('');

    const [isMistake, setIsMistake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    let history = useHistory();

    const condition2 = emailValidator.validate(registerEmail);
    const condition3 = registerPassword.length >= 6 && registerPassword.length <= 12;
    const condition4 = registerPassword === registerRePassword;

    const errorValues1 = {
        fontSize: '12px',
        float: 'right',
        color: '#E3350D'
    };

    const errorValues2 = {
        padding: '14px 0px 0px 8px',
        fontSize: '14px',
        float: 'left',
        color: '#E3350D'
    };

    const signupUser = () => {
        
        if (registerEmail && registerPassword && registerRePassword 
            && condition2 && condition3 && condition4) {

            setIsMistake(false);
            setIsLoading(true);

            createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            ).then(() => {
                history.push('/');
            }).catch((error) => {
                console.log(error.message);
            });

        } else {
            setIsMistake(true);
        }
    }

    return (
        <div id="signup" className="nes-container is-dark">
            <h2>Signup</h2>

            <div className='form'>

                <div className="nes-field">
                    <input
                        type="email"
                        className="nes-input"
                        placeholder="Enter e-mail"
                        onChange={e => setRegisterEmail(e.target.value)}
                    />
                    {(registerEmail && !condition2) && <span style={errorValues1}>E-mail address must be a valid one.</span>}
                </div>

                <div className="nes-field">
                    <input
                        type="password"
                        className="nes-input"
                        placeholder="Enter password"
                        onChange={e => setRegisterPassword(e.target.value)}
                    />
                    {(registerPassword && !condition3) && <span style={errorValues1}>Password must be between 6 and 12 characters.</span>}
                </div>

                <div className="nes-field">
                    <input
                        type="password"
                        className="nes-input"
                        placeholder="Re-enter password"
                        onChange={e => setRegisterRePassword(e.target.value)}
                    />
                    {(registerRePassword && !condition4) && <span style={errorValues1}>Password must be written two times.</span>}
                </div>

                <div>
                    {isMistake && <span style={errorValues2}>All areas must be filled out.</span>}
                    <button
                        className="nes-btn is-primary"
                        disabled={isLoading}
                        onClick={signupUser}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;