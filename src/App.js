import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Clock from './components/Clock/Clock.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Footer from './components/Footer/Footer.js';

import Home from './components/Home/Home.js';
import Catch from './components/Catch/Catch.js';
import Login from './components/Login/Login.js';

function App() {

	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<Navbar />
				</header>
				<aside>
					<Clock />
					<Sidebar />
				</aside>
				<main className="nes-container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/catch" component={Catch} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
