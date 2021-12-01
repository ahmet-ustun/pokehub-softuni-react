import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Clock from './components/Clock/Clock.js';
import Sidebar from './components/Sidebar/Sidebar.js';

function App() {

	return (
		<div className="App">
			<Navbar />
			<Clock />
			<Sidebar />
		</div>
	);
}

export default App;
