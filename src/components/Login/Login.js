import './Login.css';

import { useState } from 'react';
import emailValidator from 'email-validator';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [isMistake, setIsMistake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    const condition1 = emailValidator.validate(loginEmail);
    const condition2 = loginPassword.length >= 6 && loginPassword.length <= 12;

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

    const loginUser = () => {

        if (loginEmail && loginPassword && condition1 && condition2) {

            setIsMistake(false);
            setIsLoading(true);

            signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            ).then(() => {
                history.push('/');
            }).catch((error) => {
                alert(error.message);
                setIsLoading(false);
            });

        } else {
            setIsMistake(true);
        }
    }

    return (
        <div id="login" className="nes-container is-dark">
            <h2>Login</h2>

            <div className="form">
                <div className="nes-field">
                    <input
                        type="email"
                        className="nes-input"
                        placeholder="Enter e-mail"
                        onChange={e => setLoginEmail(e.target.value)}
                    />
                    {(loginEmail && !condition1) && <span style={errorValues1}>E-mail address must be filled out.</span>}
                </div>

                <div className="nes-field">
                    <input
                        type="password"
                        className="nes-input"
                        placeholder="Enter password"
                        onChange={e => setLoginPassword(e.target.value)}
                    />
                    {(loginPassword && !condition2) && <span style={errorValues1}>Password must be filled out.</span>}
                </div>

                <div>
                    {isMistake && <span style={errorValues2}>All areas must be filled out.</span>}
                    <button
                        className="nes-btn is-primary"
                        disabled={isLoading}
                        onClick={loginUser}
                    >Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Login;