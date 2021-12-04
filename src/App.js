import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Clock from './components/Clock/Clock.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Footer from './components/Footer/Footer.js';

import Home from './components/Home/Home.js';

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
						<Route path="/" component={Home} />
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
