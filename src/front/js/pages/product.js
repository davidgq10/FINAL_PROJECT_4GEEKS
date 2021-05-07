import React from "react";
import { engranaje } from "../../img/engranaje.png";
// import { cluth } from "../../img/cluth.jpg";
// import { frenos } from "../../img/frenos.jpg";
// import { suspension } from "../../img/suspension.png";
import { Repuesto } from "../component/repuesto";

export const Product = () => {
	return (
		<div className="bg-ColorClaro">
			<div className="container bg-ColorClaro">
				<div className="row">
					<div className="col-sm-3 justify-content-end">
						<img
							src="engranaje.png"
							className="rounded float-left"
							alt="..."
							width="100px"
							height="100px"
						/>
					</div>

					<div className="col-sm-6 pt-5 mt-3 ">
						<section className="search-sec  ">
							<form action="#" method="post">
								<div className="row justify-content-md-center">
									<div className="col-lg-3 col-md-3 col-sm-12 p-0">
										<input type="text" className="form-control search-slt" placeholder="Placa" />
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 p-0">
										<input type="text" className="form-control search-slt" placeholder="Repuesto" />
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 p-0">
										<select className="form-control search-slt" id="exampleFormControlSelect1">
											<option>Vehiculo</option>
											<option>Example one</option>
											<option>Example one</option>
											<option>Example one</option>
											<option>Example one</option>
											<option>Example one</option>
											<option>Example one</option>
										</select>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 p-0">
										<button type="button" className="btn btn-danger wrn-btn">
											Search
										</button>
									</div>
								</div>
							</form>
						</section>
					</div>

					<div className="col-sm-3 pt-4    ">
						<i className="fas fa-cart-arrow-down  fa-3x d-flex justify-content-end"></i>
					</div>
				</div>
			</div>

			<div className="container text-center mt-5 bg-ColorClaro ">
				<div className="row justify-content-md-center">
					<div className="col-9">
						<h1 className="text-left">Categoria A</h1>

						<div className="scrolling-wrapper">
							<Repuesto />
							<Repuesto />
							<Repuesto />
							<Repuesto />
						</div>
					</div>
				</div>

				<div className="container text-center mt-5 mb-5  ">
					<div className="row justify-content-md-center ">
						<div className="col-9 ">
							<h1 className="text-left">Categoria B</h1>
							<div className="scrolling-wrapper ">
								<Repuesto />
								<Repuesto />
								<Repuesto />
								<Repuesto />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
