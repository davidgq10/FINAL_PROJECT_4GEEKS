import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleDelete = item => {
		actions.deleteFav(item);
	};

	const loginLogout = () => {
		let tokenExist = sessionStorage.getItem("token");
		// && store.loginResponse == "Login Succesful!"
		if (tokenExist != null || tokenExist != undefined) {
			let id = sessionStorage.getItem("id");
			let name = sessionStorage.getItem("name");
			let lastname = sessionStorage.getItem("lastname");
			actions.getUserbyID(id);
			return (
				<span
					className="navbar-brand mb-0 "
					onClick={() => {
						actions.clearSession();
						location.replace("/");
					}}>
					{name}, {lastname} &nbsp; <i className="fas fa-sign-out-alt fa-1x"></i>
					&nbsp;Salir
				</span>
			);
		} else {
			return (
				<span className="navbar-brand mb-0 " onClick={() => location.replace("/login")}>
					<i className="fas fa-user-circle fa-1x" />
					&nbsp; Iniciar sesión
				</span>
			);
		}
	};

	const newNavbar = () => {
		let tokenExist = sessionStorage.getItem("token");

		if (tokenExist != null) {
			return (
				<div className="col d-flex justify-content-center">
					<Link to="/">
						<span className="navbar-brand mb-0 ">Inicio</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Productos</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/about">
						<span className="navbar-brand mb-0 ">Sobre Nosotros</span>
					</Link>
				</div>
			);
		} else {
			return (
				<div className="col d-flex justify-content-center">
					<Link to="/home">
						<span className="navbar-brand mb-0 ">Inicio</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/register">
						<span className="navbar-brand mb-0 ">Registro</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Productos</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/about">
						<span className="navbar-brand mb-0 ">Sobre Nosotros</span>
					</Link>
				</div>
			);
		}
	};

	const getFavorites = store.favs.map((item, index) => {
		return (
			<a key={index} className="dropdown-item" href="#">
				<div className="d-flex flex-row justify-content-between bd-highlight align-items-center">
					<img style={{ height: "30px" }} src={item.enlace} alt="..." />
					<div className="p-2 bd-highlight">{item.nombre}</div>
					<button
						type="button"
						className="btn btn-light"
						onClick={evento => {
							handleDelete(item);
						}}>
						<i className="fas fa-trash-alt" />
					</button>
				</div>
			</a>
		);
	});

	return (
		<nav className="navbar navbar-dark fixed-top mb-5 bg-dark justify-content-center mb-0">
			<div className="container">
				{/*Sección de marca*/}
				<div className="col d-flex justify-content-start">
					<Link to="/">
						<span className="navbar-brand mb-0 ">
							<i className="fas fa-cogs" /> &nbsp;EasyPartsCR
						</span>
					</Link>
				</div>

				{/*Accesos directos en centro*/}
				{/* <div className="col d-flex justify-content-center">
					<Link to="/home">
						<span className="navbar-brand mb-0 ">Inicio</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/register">
						<span className="navbar-brand mb-0 ">Registro</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Productos</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/about">
						<span className="navbar-brand mb-0 ">Sobre Nosotros</span>
					</Link>
				</div> */}
				{newNavbar()}
				<div className="col d-flex justify-content-end">
					{/*Botón de inicio de sesión*/}

					{loginLogout()}

					{/*Menú de favoritos*/}
					<span className="dropdown d-flex align-items-center">
						<i
							className="fas fa-shopping-cart fa-2x dropdown-toggle align-middle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="badge badge-pill badge-light">{store.favs.length}</span>
						</i>
						<div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
							{getFavorites}
							<div className="dropdown-divider" />

							<Link to="/pay">
								<button type="button" className="btn btn-danger justify-content-center btn-block mb-0">
									Comprar &nbsp; <i className="fas fa-shopping-basket" />
								</button>
							</Link>
						</div>
					</span>
				</div>
			</div>
		</nav>
	);
};
