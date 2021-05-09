import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//importación de imágenes
import icBuscar from "../../img/buscar.png";
import icTienda from "../../img/tienda.png";
import icSoporte from "../../img/support.png";
import icMan from "../../img/man.png";
import "../../styles/home.scss";

export const Homed = () => {
	// se crea un array de objetos que contiene las opciones del menú
	const Menu = [
		{
			titulotarjeta: "Buscar",
			imagen: <i className="fas fa-search fa-5x" />,
			descripcion: "En esta sección podrás encontrar tu repuesto aplicando criterios de búsqueda de tu vehículo",
			vista: "/product",
			esVista: "true"
		},
		{
			titulotarjeta: "Login",
			imagen: <i className="far fa-user fa-5x" />,
			descripcion: "En esta sección podrás inscribirte como anunciante",
			vista: "/register",
			esVista: "true"
		},
		{
			titulotarjeta: "Vender",
			imagen: <i className="fas fa-store fa-5x" />,
			descripcion: "Registrate y obtén la posibilidad de realizar compras en línea y gestionar tus artículos",
			vista: "/login",
			esVista: "true"
		},
		{
			titulotarjeta: "Soporte",
			imagen: <i className="fas fa-question-circle fa-5x" />,
			descripcion:
				"Si necesitas ayuda de un profesional para saber cuál repuesto necesitas puedes consultar aquí",
			vista: "https://api.whatsapp.com/send?phone=+50684495779&text=Hola,%20como%20estas?",
			esVista: "false"
		}
	];

	// en el siguiente bloque se generan las tarjetas
	const getCards = Menu.map((item, index) => {
		return item.esVista == "true" ? (
			<Link
				key={index}
				to={item.vista}
				classclassName="text-link"
				style={{ textDecoration: "none", color: "#333" }}>
				<div className="card_home text-link">
					<div className="face face1">
						<div className="content">
							{item.imagen}
							<h3>{item.titulotarjeta}</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>{item.descripcion}</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>
			</Link>
		) : (
			<span
				className="card_home text-link"
				key={index}
				href={item.vista}
				target="_blank"
				rel="noopener noreferrer">
				<div className="face face1">
					<div className="content">
						{item.imagen}
						<h3>{item.titulotarjeta}</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="content">
						<p>{item.descripcion}</p>
						<a href="#">Read More</a>
					</div>
				</div>
			</span>
		);
	});

	// retorna la vista home
	return (
		<div className="myHome mt-0">
			{/*Sección de Jumbotron*/}
			<div className="container" style={{ height: "100%" }}>
				<div className="transbox">
					<h1 className="text-light text-center">¿Necesitas un repuesto para tu vehículo?</h1>
					<h4 className="text-ColorCeleste text-center">
						En este sitio podrás encontrar los repuestos disponibles en los distribuidores del país
					</h4>
				</div>
				{/*Sección de Cards*/}
				<div className="container">
					<div className="container_home">
						<div className="card-deck card-columns">{getCards}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
