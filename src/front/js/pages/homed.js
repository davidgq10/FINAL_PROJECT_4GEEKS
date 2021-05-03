import React, { useContext } from "react";
import { Context } from "../store/appContext";
import icBuscar from "../../img/buscar.png";
import icTienda from "../../img/tienda.png";
import icSoporte from "../../img/consultante.png";
import icMan from "../../img/man.png";
import "../../styles/home.scss";

export const Homed = () => {
	return (
		<div className="myHome">
			{/*Sección de Jumbotron*/}
			<div className="container">
				<div className="transbox">
					<h1 className="text-primary text-center">¿Necesitas un repuesto para tu vehículo?</h1>
					<h4 className="text-ColorAzulOscuro text-center">
						En este sitio podrás encontrar los repuestos disponibles de los distribuidores del país
					</h4>
				</div>
				{/*Sección de Cards*/}
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="card-deck card-columns">
							<div
								className="card bg-ColorAzulClaro border border-dark pb-0"
								style={{ width: "16rem", height: "25rem" }}>
								<div className="container-fluid">
									<img
										src={icBuscar}
										className="card-img-top img-fluid pt-4 pb-3 rounded-top"
										alt="..."
									/>
								</div>

								<div className="card-body  bg-light">
									<p className="card-text text-center">
										En esta sección podrás encontrar tu repuesto aplicando criterios de búsqueda de
										tu vehículo
									</p>
								</div>
							</div>
							<div className="card  pt-3" style={{ width: "16rem", height: "25rem" }}>
								<div className="container-fluid mt-1 bg-ColorAzulClaro">
									<img src={icTienda} className="card-img-top img-fluid p-2" alt="..." />
								</div>

								<div className="card-body">
									<p className="card-text text-center">
										En esta sección podrás inscribirte como anunciante
									</p>
								</div>
							</div>
							<div className="card  pt-3" style={{ width: "16rem", height: "25rem" }}>
								<div className="container-fluid mt-1 bg-ColorAzulOscuro">
									<img src={icMan} className="card-img-top img-fluid p-2" alt="..." />
								</div>

								<div className="card-body">
									<p className="card-text text-center">
										Registrate y obtén la posibilidad de realizar compras en línea y gestionar tus
										artículos
									</p>
								</div>
							</div>
							<div className="card  pt-3 bg-ColorAzulOscuro " style={{ width: "16rem", height: "25rem" }}>
								<div className="container-fluid mt-1">
									<img src={icSoporte} className="card-img-top img-fluid p-2" alt="..." />
								</div>

								<div className="card-body">
									<p className="card-text text-center">
										Si necesitas ayuda de un profesional para saber cuál repuesto necesitas puedes
										consultar aquí
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
