import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const ChangePassword = () => {
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");

	if (store.passwordResponse.msg == "Password updated!") {
		location.replace("/login");
	}
	let data = sessionStorage.getItem("email");

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handlePassword2 = e => {
		setPassword2(e.target.value);
	};

	const resetPassword = () => {
		if (password == password2) {
			setError("");
			changePassword();
		} else {
			setError("Passwords don't match!");
		}
	};

	const changePassword = () => {
		let temp = {
			email: data,
			password: password2
		};
		actions.putPassword(temp);
	};
	return (
		<div className="container-fluid myLogin mt-5" style={{ minHeight: "90%" }}>
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-asterisk" />
					<i className="fas fa-asterisk" />
					<i className="fas fa-asterisk" />
					<i className="fas fa-asterisk" />
					<i className="fas fa-asterisk" />
					<i className="fas fa-asterisk" />
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
							value={password}
							onChange={e => {
								handlePassword(e);
							}}
						/>
					</div>
					<div className="form-group">
						<label className="exampleInputPassword1">Confirmar contraseña</label>
						<input
							type="password"
							className="form-control"
							id="validationCustom02"
							required
							value={password2}
							onChange={e => {
								handlePassword2(e);
							}}
						/>
						<span className="text-danger d-flex justify-content-center pt-3">{error}</span>
						<span className="text-danger d-flex justify-content-center pt-3">
							{store.passwordResponse.msg}
						</span>
					</div>

					<button type="button" className="btn btn-danger btn-block" onClick={() => resetPassword()}>
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
