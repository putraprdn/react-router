import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Category from "./components/category";
import Login from "./components/login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Category />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
