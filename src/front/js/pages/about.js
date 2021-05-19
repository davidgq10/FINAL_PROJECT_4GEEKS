import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const AboutUs = () => {
	// se crea un array de objetos que contiene las opciones del menú
	const Menu = [
		{
			titulotarjeta: "Mauricio Vargas Soto",
			imagen: <i className="far fa-user fa-4x" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "David Garbanzo Quirós",
			imagen: <i className="far fa-user fa-4x" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "Jeffry Porras Barahona",
			imagen: <i className="far fa-user fa-4x" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "Ricardo Tapia Venegas",
			imagen: <i className="far fa-user fa-4x" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "false"
		}
	];

	// en el siguiente bloque se generan las tarjetas
	const getCards = Menu.map((item, index) => {
		return (
			<div key={index} className="text-link" style={{ textDecoration: "none", color: "#333" }}>
				<div className="card_home text-link">
					<div className="face face1">
						<div className="content justify-content-center">
							<div className="row justify-content-center">{item.imagen}</div>
							<div className="row justify-content-center mx-4">
								<h3>{item.titulotarjeta}</h3>
							</div>
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>{item.descripcion}</p>
						</div>
					</div>
				</div>
			</div>
		);
	});

	// retorna la vista home
	return (
		<div className="container-fluid myHome mt-5" style={{ minHeight: "100%" }}>
			{/*Sección de Jumbotron*/}
			<div className="container justify-content-center" style={{ height: "100%" }}>
				<div className="transbox">
					<h1 className="text-light text-center">¿Quiénes somos?</h1>
					<h4 className="text-ColorCeleste text-center">Somos ticos, protrocinados por:</h4>
				</div>
				<div className="container d-flex justify-content-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Micitt_logo.png/800px-Micitt_logo.png"
						alt="Girl in a jacket"
						width="25%"
						height="auto"
					/>
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
