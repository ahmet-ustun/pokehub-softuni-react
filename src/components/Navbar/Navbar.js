import './Navbar.css';

const LeftSide = () => {
    return (
        <div id="navbar-left">
            <a href="/">
                <img src="https://img.icons8.com/dusk/64/000000/home.png" alt="Home" />
                <span>Home</span>
            </a>
            <a href="/catch">
                <img src="https://img.icons8.com/dusk/64/000000/open-pokeball.png" alt="Catch" />
                <span>Catch</span>
            </a>
        </div>
    );
}

const RightSide = () => {
    return (
        <div id="navbar-right">
            <a href="/login">
                <img src="https://img.icons8.com/dusk/64/000000/login-rounded-right.png" alt="Login" />
                <span>Login</span>
            </a>
            <a href="/signup">
                <img src="https://img.icons8.com/dusk/64/000000/book-and-pencil.png" alt="Signup" />
                <span>Signup</span>
            </a>
            <a href="/logout">
                <img src="https://img.icons8.com/dusk/64/000000/logout-rounded-left.png" alt="Logout" />
                <span>Logout</span>
            </a>
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