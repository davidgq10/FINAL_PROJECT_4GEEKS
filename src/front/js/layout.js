import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Product } from "./pages/product";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Homed } from "./pages/homed";
import { Register } from "./pages/register";
import { ProductDetail } from "./pages/productdetail";
import { Recovery } from "./pages/sendcode";
import { ConfirmCode } from "./pages/confirmcode";
import { ChangePassword } from "./pages/changepassword";
import { Favs } from "./pages/favsdetail";
import { AboutUs } from "./pages/about";
import { Landing } from "./pages/landing";
import { CargarBase } from "./pages/loadDataBaseProducts";
import { PruebaCarga } from "./pages/boton";

import { Login } from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/home">
							<Homed />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/product">
							<Product />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/productdetail/:theIndx">
							<ProductDetail />
						</Route>
						<Route exact path="/recovery">
							<Recovery />
						</Route>
						<Route exact path="/confirmcode">
							<ConfirmCode />
						</Route>
						<Route exact path="/changepassword">
							<ChangePassword />
						</Route>
						<Route exact path="/pay">
							<Favs />
						</Route>
						<Route exact path="/about">
							<AboutUs />
						</Route>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/abcdfghijkl">
							<CargarBase />
						</Route>
						<Route exact path="/prueba">
							<PruebaCarga />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
