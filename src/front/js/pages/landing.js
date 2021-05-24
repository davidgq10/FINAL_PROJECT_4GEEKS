import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import Chevy from "../../img/chevy.jpg";

export const Landing = () => {
	// se crea un array de objetos que contiene las opciones del menú

	// retorna la vista home
	return (
		<div className="container-fluid myHome mt-5">
			{/*Sección de Jumbotron*/}
			<div className="container justify-content-center" style={{ height: "100%" }}>
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="https://www.newlandattorneys.com/images/arlington-heights-keep-car-in-bankruptcy-lawyer.jpg"
								alt="First slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://di-uploads-pod16.dealerinspire.com/continentalferrari/uploads/2018/12/Ferrari-488-Spider.jpg"
								alt="Second slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1076246-special.png"
								alt="Third slide"
							/>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
				<div className="jumbotron">
					<h1 className="display-4 text-center">Aquí encontrarás el repuesto que tanto buscás</h1>
					<p className="lead text-center">
						Easy Parts CR, nace con el fin de ayudarte a encontrar con facilidad las partes del vehículo que
						necesites.
					</p>
					<hr className="my-4" />
					<p className="text-center">
						Esto se logra al poder integrar el catálogo de los vendores pequeños, medianos y grandes en una
						misma plataforma.
					</p>
					<p className="lead">
						<div className="row">
							<div className="col d-flex justify-content-center">
								<Link to="/about">
									<button type="button" className="btn btn-dark btn-lg">
										Sobre los creadores
									</button>
								</Link>
							</div>
							<div className="col d-flex justify-content-center">
								<Link to="/product">
									<button type="button" className="btn btn-danger btn-lg">
										Buscar partes
									</button>
								</Link>
							</div>
						</div>
					</p>
					<p className="lead"></p>
				</div>
			</div>
		</div>
	);
};
