import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	return (
		<div className="myLogin mt-5">
			<div className="container-md mt-4 col-4 myForm p-4 rounded">
				<div className="row mb-2">
					<span className="col-md-4 d-flex justify-content-center align-middle">
						<i className="fas fa-id-card fa-1x" />
					</span>
					<span className="col-md-6 d-flex justify-content-center ">
						<h3 className="align-middle">Información de la cuenta</h3>
					</span>
				</div>
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label className="validationCustom01">Nombre</label>
							<input type="text" className="form-control" id="inputEmail4" required />
						</div>
						<div className="form-group col-md-6">
							<label className="validationCustom01">Apellido</label>
							<input type="text" className="form-control" id="inputPassword4" required />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label className="inputPassword4">Correo electrónico</label>
							<input type="email" className="form-control" id="inputPassword4" required />
						</div>
						<div className="form-group col-md-6">
							<label className="inputEmail4">Contraseña</label>
							<input type="password" className="form-control" id="inputEmail4" required />
						</div>
					</div>

					<div className="form-row mt-3">
						<div className="form-group col-md-6">
							<button type="submit" className="btn btn-danger mr-2 btn-block">
								Crear cuenta
							</button>
						</div>
						<div className="form-group col-md-6">
							<Link to="/">
								<button
									type="submit"
									className="btn btn-outline-dark btn-block"
									style={{ with: "200px" }}>
									Cancelar
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
