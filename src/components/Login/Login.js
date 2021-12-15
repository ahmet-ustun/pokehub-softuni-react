import './Login.css';

const Login = () => {
    return (
        <div id="login" className="nes-container is-dark">
            <h2>Login</h2>

            <form>
                <div className="nes-field">
                    <input type="email" id="email" className="nes-input" placeholder="Enter e-mail" />
                </div>

                <div className="nes-field">
                    <input type="password" id="password" className="nes-input" placeholder="Enter password" />
                </div>

                <div>
                    <button type="submit" className="nes-btn is-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;