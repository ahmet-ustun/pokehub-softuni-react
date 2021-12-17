import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound2 } from './components/NotFound/NotFound.js';
import { AuthContext } from './contexts/Auth.js';
import { useContext } from 'react';

import Navbar from './components/Navbar/Navbar.js';
import Clock from './components/Clock/Clock.js';
import { Sidebar } from './components/Sidebar/Sidebar.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Catch from './components/Catch/Catch.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Pokedex from './components/Pokedex/Pokedex.js';
import Pokemon from './components/Pokemon/Pokemon.js';

function App() {

	const { currentUser } = useContext(AuthContext);

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
						<Route exact path="/" component={currentUser ? Dashboard : Home} />
						{currentUser && <Route exact path="/catch" component={Catch} />}
						{!currentUser && <Route exact path="/login" component={Login} />}
						{!currentUser && <Route exact path="/signup" component={Signup} />}
						<Route exact path="/pokedex/:letter" component={Pokedex} />
						<Route exact path="/pokedex/:letter/:pokemon" component={Pokemon} />
						<Route component={NotFound2} />
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