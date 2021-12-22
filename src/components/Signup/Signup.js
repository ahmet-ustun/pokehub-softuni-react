import './Signup.css';

import { useState } from 'react';
import emailValidator from 'email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase.js';
import { useHistory } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerRePassword, setRegisterRePassword] = useState('');

    const [isMistake, setIsMistake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    const condition1 = emailValidator.validate(registerEmail);
    const condition2 = registerPassword.length >= 6 && registerPassword.length <= 12;
    const condition3 = registerPassword === registerRePassword;

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
            && condition1 && condition2 && condition3) {

            setIsMistake(false);
            setIsLoading(true);

            createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            ).then(async (response) => {
                history.push('/');
                const user = response.user.uid;
                const docRef = doc(db, "users", user);
                await setDoc(docRef, {
                    lastCaught: '',
                    collection: []
                });
            }).catch((error) => {
                alert(error.message);
                setIsLoading(false);
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
                    {(registerEmail && !condition1) && <span style={errorValues1}>E-mail address must be a valid one.</span>}
                </div>
                <div className="nes-field">
                    <input
                        type="password"
                        className="nes-input"
                        placeholder="Enter password"
                        onChange={e => setRegisterPassword(e.target.value)}
                    />
                    {(registerPassword && !condition2) && <span style={errorValues1}>Password must be between 6 and 12 characters.</span>}
                </div>
                <div className="nes-field">
                    <input
                        type="password"
                        className="nes-input"
                        placeholder="Re-enter password"
                        onChange={e => setRegisterRePassword(e.target.value)}
                    />
                    {(registerRePassword && !condition3) && <span style={errorValues1}>Password must be written two times.</span>}
                </div>
                <div>
                    {isMistake && <span style={errorValues2}>All areas must be filled out.</span>}
                    <button
                        className="nes-btn is-primary"
                        disabled={isLoading}
                        onClick={signupUser}
                    >{isLoading ? "Loading" : "Submit"}</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;