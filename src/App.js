import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/index";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import LoginWithPhone from "./screens/loginWithPhone";
import ProductScreen from "./screens/categoryScreen";
import Account from "./screens/account";
import OtpScreen from "./screens/otpScreen";
import RequestAccess from "./screens/requestAccess";
import PersonalDetailScreen from "./screens/personalDetailScreen";
import CategoryScreen from "./screens/CategoryByName";
import ProductByIdScreen from "./screens/productByIdScreen";
import CartScreen from "./screens/cartScreen";
import VerificationForPhoneNumberScreen from "./screens/verificationForPhoneNumberScreen";
import AddressBookScreen from "./screens/addressBookScreen";
import AddressDetails from "./screens/addressDetails";
import DeliverySelfScreen from "./screens/deliverySelfScreen";
import AddRecipientScreen from "./screens/addRecipientScreen";
import RecentlyViewedScreen from "./screens/RecentlyViewedScreen";
import Dashboard from "./screens/Dashboard";
import CategoryByName from "./screens/CategoryByName";
import CategoriesScreen from "./screens/categoryScreen";
import MyOrderScreen from "./screens/orderScreen";
import OrderByIdScreen from "./screens/orderByIdScreen";
import AdminOrderByIdScreen from "./screens/adminOrderByIdScreen";
import AdminProductByIdScreen from "./screens/adminProductByIdScreen";
import GenerateInvoice from "./screens/generateInvoice";

import "antd/dist/reset.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/signup" element={<RegisterScreen />} />
				<Route path="/loginphone" element={<LoginWithPhone />} />
				<Route path="/productscreen" element={<ProductScreen />} />
				<Route path="/product/:id" element={<ProductByIdScreen />} />
				<Route path="/account" element={<Account />} />
				<Route path="/otp" element={<OtpScreen />} />
				<Route path="/requestaccess" element={<RequestAccess />} />
				<Route path="/personaldetails" element={<PersonalDetailScreen />} />
				<Route path="/categories" element={<CategoriesScreen />} />
				<Route path="/categories/:name" element={<CategoryByName />} />
				<Route path="/cart" element={<CartScreen />} />
				<Route
					path="/verification"
					element={<VerificationForPhoneNumberScreen />}
				/>
				<Route path="/addressbook" element={<AddressBookScreen />} />
				<Route path="/addressdetails" element={<AddressDetails />} />
				<Route path="/delivery" element={<DeliverySelfScreen />} />
				<Route path="/addressrecepient" element={<AddRecipientScreen />} />
				<Route path="/recently_viewed" element={<RecentlyViewedScreen />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/orders" element={<MyOrderScreen />} />
				<Route path="/order/:id" element={<OrderByIdScreen />} />
				<Route path="/admin/orders/:id" element={<AdminOrderByIdScreen />} /> }
				<Route path="/admin/product/:id" element={<AdminProductByIdScreen />} />
				<Route path="/invoice/:id" element={<GenerateInvoice />} />
			</Routes>
		</Router>
	);
}

export default App;
