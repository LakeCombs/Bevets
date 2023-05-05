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
import CategoryScreen from "./screens/categoryScreen";
import ProductByIdScreen from "./screens/productByIdScreen";
import CartScreen from "./screens/cartScreen";
import VerificationForPhoneNumberScreen from "./screens/verificationForPhoneNumberScreen";
import AddressBookScreen from "./screens/addressBookScreen";
import AddressDetails from "./screens/addressDetails";
import DeliverySelfScreen from "./screens/deliverySelfScreen";
import AddRecipientScreen from "./screens/addRecipientScreen";

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
				<Route path="/categories" element={<CategoryScreen />} />
				<Route path="/categories/:id" element={<ProductByIdScreen />} />
				<Route path="/cart" element={<CartScreen />} />
				<Route
					path="/verification"
					element={<VerificationForPhoneNumberScreen />}
				/>
				<Route path="/addressbook" element={<AddressBookScreen />} />
				<Route path="/addressdetails" element={<AddressDetails />} />
				<Route path="/delivery" element={<DeliverySelfScreen />} />
				<Route path="/addressrecepient" element={<AddRecipientScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
