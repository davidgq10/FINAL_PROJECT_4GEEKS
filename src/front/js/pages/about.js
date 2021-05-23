import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import Ricardo from "../../img/RicardoTapia.jpg";
import Mauricio from "../../img/MauricioVargas.jpg";
import David from "../../img/David.jpg";
import Jeffry from "../../img/Jeffry.jpg";
export const AboutUs = () => {
	// se crea un array de objetos que contiene las opciones del menú
	const Menu = [
		{
			titulotarjeta: "Mauricio Vargas Soto",
			imagen: <img src={Mauricio} alt="Foto de Mauricio" width="100%" height="auto" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "David Garbanzo Quirós",
			imagen: <img src={David} alt="Foto de David" width="100%" height="auto" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "Jeffry Porras Barahona",
			imagen: <img src={Jeffry} alt="Foto de Jeffry" width="100%" height="auto" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "true"
		},
		{
			titulotarjeta: "Ricardo Tapia Venegas",
			imagen: <img src={Ricardo} alt="Foto de Ricardo" width="100%" height="auto" />,
			descripcion: "Full Stack Devolper.",
			vista: "",
			esVista: "false"
		}
	];
	{
		/* <i className="far fa-user fa-4x" /> icono*/
	}
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
		<div className="container-fluid myHome mt-5 h-100">
			{/*Sección de Jumbotron*/}
			<div className="container justify-content-center" style={{ height: "90%" }}>
				<div className="transbox">
					<h1 className="text-light text-center">¿Quiénes somos?</h1>
					<h4 className="text-ColorCeleste text-center">Somos ticos, protrocinados por:</h4>
				</div>
				<div className="row">
					<div className="col">
						<div className="container d-flex justify-content-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Micitt_logo.png/800px-Micitt_logo.png"
								alt="Girl in a jacket"
								width="50%"
								height="auto"
							/>
						</div>
					</div>
					<div className="col">
						<div className="container d-flex justify-content-center">
							<img
								src="https://becasmicitt.com/static/media/cinde-v2-logo.c3bd6e5a.png"
								alt="Girl in a jacket"
								width="100%"
								height="auto"
							/>
						</div>
					</div>
					<div className="col">
						<div className="container d-flex justify-content-center">
							<img
								src="https://becasmicitt.com/static/media/esencial-v2-logo.26f31f30.png"
								alt="Girl in a jacket"
								width="100%"
								height="auto"
							/>
						</div>
					</div>
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
