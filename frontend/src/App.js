import { Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar.js'
import Footer from 'components/Footer'
import Home from 		'pages/HomePage'

import { BackendPlacesProvider } from 'context/BackendPlaces'

function App() {

	return (
		<>
		<BackendPlacesProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} exact />
			</Routes>
			<Footer />
		</BackendPlacesProvider>
		</>
	);
}

export default App;
