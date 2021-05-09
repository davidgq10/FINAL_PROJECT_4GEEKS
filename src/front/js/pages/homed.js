import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import icBuscar from "../../img/buscar.png";
import icTienda from "../../img/tienda.png";
import icSoporte from "../../img/consultante.png";
import icMan from "../../img/man.png";
import "../../styles/home.scss";

export const Homed = () => {
	// se crea un array de objetos que contiene las opciones del menú
	const Menu = [
		{
			imagen: icBuscar,
			descripcion: "En esta sección podrás encontrar tu repuesto aplicando criterios de búsqueda de tu vehículo",
			vista: "/product",
			esVista: "true"
		},
		{
			imagen: icTienda,
			descripcion: "En esta sección podrás inscribirte como anunciante",
			vista: "/register",
			esVista: "true"
		},
		{
			imagen: icMan,
			descripcion: "Registrate y obtén la posibilidad de realizar compras en línea y gestionar tus artículos",
			vista: "/login",
			esVista: "true"
		},
		{
			imagen: icSoporte,
			descripcion:
				"Si necesitas ayuda de un profesional para saber cuál repuesto necesitas puedes consultar aquí",
			vista: "https://api.whatsapp.com/send?phone=+50684495779&text=Hola,%20como%20estas?",
			esVista: "false"
		}
	];

	// en el siguiente bloque se generan las tarjetas
	const getCards = Menu.map((item, index) => {
		return item.esVista == "true" ? (
			<Link key={index} to={item.vista} classclassName="text-link">
				<div
					className="text-link card_home order border-dark border-2 pb-0"
					style={{ width: "15rem", height: "25rem", textDecoration: "none" }}>
					<div className="container-fluid">
						<img src={item.imagen} className="card-img-top img-fluid pt-4 pb-3 rounded-top" alt="..." />
					</div>
					<div className="card-body bg-light" style={{ "min-height": "8rem" }}>
						<p className="card-text text-center">{item.descripcion}</p>
					</div>
				</div>
			</Link>
		) : (
			<a
				key={index}
				href={item.vista}
				target="_blank"
				rel="noopener noreferrer"
				className="text-link card order border-dark border-2 pb-0"
				style={{ width: "15rem", height: "25rem", textDecoration: "none" }}>
				<div className="container-fluid">
					<img src={item.imagen} className="card-img-top img-fluid pt-4 pb-3 rounded-top" alt="..." />
				</div>
				<div className="card-body bg-light" style={{ "min-height": "8rem" }}>
					<p className="card-text text-center">
						{item.descripcion}
						{item.esVista.toString()}
					</p>
				</div>
			</a>
		);
	});

	// retorna la vista home
	return (
		<div className="myHome">
			{/*Sección de Jumbotron*/}
			<div className="container">
				<div className="transbox">
					<h1 className="text-light text-center">¿Necesitas un repuesto para tu vehículo?</h1>
					<h4 className="text-ColorCeleste text-center">
						En este sitio podrás encontrar los repuestos disponibles en los distribuidores del país
					</h4>
				</div>
				{/*Sección de Cards*/}
				<div className="container mt-2">
					<div className="row justify-content-md-center">
						<div className="card-deck card-columns">{getCards}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
