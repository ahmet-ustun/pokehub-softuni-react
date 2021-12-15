import './Navbar.css';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { useHistory } from 'react-router-dom';

const LeftSide = () => {

    return (
        <div id="navbar-left">
            <Link to="/">
                <img src="https://img.icons8.com/dusk/64/000000/home.png" alt="Home" />
                <span>Home</span>
            </Link>
            <Link to="/catch">
                <img src="https://img.icons8.com/dusk/64/000000/open-pokeball.png" alt="Catch" />
                <span>Catch</span>
            </Link>
        </div>
    );
}

const RightSide = () => {

    let history = useHistory();

    const logoutUser = (e) => {

        e.preventDefault();

        signOut(auth)
            .then(() => {
                history.push('/');
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div id="navbar-right">
            <Link to="/login">
                <img src="https://img.icons8.com/dusk/64/000000/login-rounded-right.png" alt="Login" />
                <span>Login</span>
            </Link>
            <Link to="/signup">
                <img src="https://img.icons8.com/dusk/64/000000/book-and-pencil.png" alt="Signup" />
                <span>Signup</span>
            </Link>
            <Link to="/logout" onClick={logoutUser}>
                <img src="https://img.icons8.com/dusk/64/000000/logout-rounded-left.png" alt="Logout" />
                <span>Logout</span>
            </Link>
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