import './Login.css';

const Login = () => {
    return (
        <div id="login" className="nes-container is-dark">
            <h2>Login</h2>

            <form>
                <div class="nes-field">
                    <input type="email" class="nes-input" placeholder="Enter email" />
                </div>

                <div class="nes-field">
                    <input type="password" class="nes-input" placeholder="Enter password" />
                </div>

                <div>
                    <button type="submit" className="nes-btn is-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;