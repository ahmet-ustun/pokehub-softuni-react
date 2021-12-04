import './Signup.css';

const Signup = () => {
    return (
        <div id="signup" className="nes-container is-dark">
            <h2>Signup</h2>

            <form>
                <div class="nes-field">
                    <input type="username" class="nes-input" placeholder="Enter username" />
                </div>

                <div class="nes-field">
                    <input type="email" class="nes-input" placeholder="Enter e-mail" />
                </div>

                <div class="nes-field">
                    <input type="password" class="nes-input" placeholder="Enter password" />
                </div>

                <div class="nes-field">
                    <input type="password" class="nes-input" placeholder="Re-enter password" />
                </div>

                <div>
                    <button type="submit" className="nes-btn is-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;