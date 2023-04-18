import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import LoginWithPhone from "./screens/loginWithPhone";
import ProductScreen from "./screens/productScreen";
import Account from "./screens/account";
import OtpScreen from "./screens/otpScreen";
import RequestAccess from "./screens/requestAccess";
import PersonalDetailScreen from "./screens/personalDetailScreen";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/signup" element={<RegisterScreen />} />
				<Route path="/loginphone" element={<LoginWithPhone />} />
				<Route path="/productscreen" element={<ProductScreen />} />
				<Route path="/account" element={<Account />} />
				<Route path="/otp" element={<OtpScreen />} />
				<Route path="/requestaccess" element={<RequestAccess />} />
				<Route path="/personaldetails" element={<PersonalDetailScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
