import { Route, Routes } from 'react-router-dom'
import Navbar from 'components/Navbar.js'
import Footer from 'components/Footer'
import Home from 		'pages/HomePage'
import Place from 'pages/Place';
import UploadPage from 'pages/UploadPage';


function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/place/:id" element={<Place />} exact />
				<Route path='/upload' element={<UploadPage />} exact />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
