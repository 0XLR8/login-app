import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Users from "./pages/Users";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
	return(
		<AuthProvider>
			<Router>
				<div className="app">
					<Navbar />
					<Routes>
						<Route path="/logIn" element={<LogIn />} />
						<Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>} />
						<Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
					</Routes>
				</div>
			</Router>
		</AuthProvider>
	)
}

export default App;