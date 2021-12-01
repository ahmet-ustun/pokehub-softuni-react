import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar" className="nes-container is-dark">
            <a href="/">Home</a>
            <a href="/catch">Catch</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/logout">Logout</a>
        </div>
    );
}

export default Navbar;