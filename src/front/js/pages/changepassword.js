import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const ChangePassword = () => {
	return (
		<div className="myLogin mt-5">
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-asterisk"></i>
					<i className="fas fa-asterisk"></i>
					<i className="fas fa-asterisk"></i>
					<i className="fas fa-asterisk"></i>
					<i className="fas fa-asterisk"></i>
					<i className="fas fa-asterisk"></i>
				</div>
				<form className="needs-validation">
					<div className="form-group">
						<label className="exampleInputPassword1">Nueva contraseña</label>
						<input
							type="password"
							className="form-control"
							aria-describedby="emailHelp"
							id="validationCustom01"
							required
						/>
					</div>
					<div className="form-group">
						<label className="exampleInputPassword1">Confirmar contraseña</label>
						<input type="password" className="form-control" id="validationCustom01" required />
					</div>
					<button type="submit" className="btn btn-danger btn-block">
						Cambiar contraseña
					</button>
					<hr className="my-3" />
					<Link to="/" className="d-flex justify-content-center">
						<p>Cancelar</p>
					</Link>
				</form>
			</div>
		</div>
	);
};
