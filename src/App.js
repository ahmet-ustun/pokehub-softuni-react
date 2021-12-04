import './App.css';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Clock from './components/Clock/Clock.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Footer from './components/Footer/Footer.js';

function App() {

	return (
		<Router>
			<div className="App">
				<header>
					<Navbar />
				</header>
				<aside>
					<Clock />
					<Sidebar />
				</aside>
				<main>
					<Switch>
						<Route path="/"><Home /></Route>
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
