import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	return (
		<div className="myLogin">
			<div className="container-md mt-4 col-6 myForm p-4 rounded">
				<div className="row mb-2">
					<span className="col-md-4 d-flex justify-content-center align-middle">
						<i className="fas fa-id-card fa-1x" />
					</span>
					<span className="col-md-6 d-flex justify-content-center ">
						<h3 className="align-middle">Complete la siguiente información</h3>
					</span>
				</div>
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label className="inputEmail4">Nombre</label>
							<input type="email" className="form-control" id="inputEmail4" />
						</div>
						<div className="form-group col-md-6">
							<label className="inputPassword4">Apellido</label>
							<input type="password" className="form-control" id="inputPassword4" />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label className="inputEmail4">Usuario</label>
							<input type="email" className="form-control" id="inputEmail4" />
						</div>
						<div className="form-group col-md-5">
							<label className="inputPassword4">Correo electrónico</label>
							<input type="password" className="form-control" id="inputPassword4" />
						</div>
						<div className="form-group col-3">
							<label className="inputState">Provincia</label>
							<select id="inputState" className="form-control">
								<option selected>San José</option>
								<option>Cartago</option>
								<option>Alajuela</option>
								<option>Heredia</option>
								<option>Guanacaste</option>
								<option>Limón</option>
								<option>Puntarenas</option>
							</select>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-6">
							<label className="inputAddress">Dirección 1</label>
							<input type="text" className="form-control" id="inputAddress" />
						</div>
						<div className="form-group col-6">
							<label className="inputAddress2">Dirección 2</label>
							<input type="text" className="form-control" id="inputAddress2" />
						</div>
					</div>
					<div className="form-row justify-content-center align-middle">
						<button type="submit" className="btn-lg btn-danger mr-2">
							Crear cuenta
						</button>{" "}
						<Link to="/">
							<button type="submit" className="btn-lg btn-light">
								Cancelar
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
