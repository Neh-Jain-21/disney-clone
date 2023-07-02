import { BrowserRouter, Route, Routes } from "react-router-dom";
// COMPONENTS
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/maincarousel/Main";

const App = () => {
	return (
		<BrowserRouter basename={import.meta.env.DEV ? "/" : "/disney-clone/"}>
			<Header />

			<Routes>
				<Route exact path="/" element={<Main />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
