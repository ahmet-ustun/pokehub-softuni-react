import './Navbar.css';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.js';

const LeftSide = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div id="navbar-left">
            <Link to="/">
                <img src="/assets/navbar/Home.png" alt="Home" />
                <span>Home</span>
            </Link>
            {currentUser && <Link to="/catch">
                <img src="/assets/navbar/Catch.png" alt="Catch" />
                <span>Catch</span>
            </Link>}
        </div>
    );
}

const RightSide = () => {

    let history = useHistory();
    const { currentUser } = useContext(AuthContext);

    const logoutUser = (e) => {

        e.preventDefault();

        signOut(auth)
            .then(() => {
                history.push('/');
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div id="navbar-right">
            {!currentUser && <Link to="/login">
                <img src="/assets/navbar/Login.png" alt="Login" />
                <span>Login</span>
            </Link>}
            {!currentUser && <Link to="/signup">
                <img src="/assets/navbar/Signup.png" alt="Signup" />
                <span>Signup</span>
            </Link>}
            {currentUser && <Link to="/" onClick={logoutUser}>
                <img src="/assets/navbar/Logout.png" alt="Logout" />
                <span>Logout</span>
            </Link>}
        </div>
    );
}

const Navbar = () => {

    return (
        <div id="navbar" className="nes-container is-dark">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default Navbar;