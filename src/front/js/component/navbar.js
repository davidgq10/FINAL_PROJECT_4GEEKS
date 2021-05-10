import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-center mb-0">
			<Link to="/">
				<span className="navbar-brand mb-0 ">Inicio</span>
			</Link>
			<span className="navbar-brand mb-0 ">|</span>
			<Link to="/login">
				<span className="navbar-brand mb-0 ">Login</span>
			</Link>
			<span className="navbar-brand mb-0 ">|</span>
			<Link to="/product">
				<span className="navbar-brand mb-0 ">Productos</span>
			</Link>
		</nav>
	);
};
