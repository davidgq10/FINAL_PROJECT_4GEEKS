import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [information, setInformation] = useState({});
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	// const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// // This is for redirect to a view
	if (store.registerStatus.msg == "User added!") {
		location.replace("/login");
	}

	const handleName = e => {
		setName(e.target.value);
	};

	const handleLastname = e => {
		setLastname(e.target.value);
	};

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handleCountry = e => {
		setCountry(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handleInformation = () => {
		// temp is the information of the new user.
		let temp = {
			name: name,
			email: email,
			last_name: lastname,
			password: password,
			user_type: "usuario"
		};

		// setInformation(temp);
		// actions.registerStore(temp);
		actions.postRegister(temp);

		// if (store.passwordResponse.msg == "User added!") {
		// 	alert("User added!");
		// }
		// if (store.passwordResponse.msg == "Email already registered.") {
		// 	alert("Email already registered.");
		// }
	};

	// Clean hooks function
	const cleanHooks = () => {
		setName("");
		setLastname("");
		setEmail("");
		setPassword("");
	};

	// const renderLoginBTN = () => {

	// };

	return (
		<div className="container-fluid myLogin mt-5 align-middle" style={{ minHeight: "90%" }}>
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
							<input
								type="text"
								className="form-control"
								id="inputEmail4"
								required
								value={name}
								onChange={e => {
									handleName(e);
								}}
							/>
						</div>
						<div className="form-group col-md-6">
							<label className="validationCustom01">Apellido</label>
							<input
								type="text"
								className="form-control"
								id="inputPassword4"
								required
								value={lastname}
								onChange={e => {
									handleLastname(e);
								}}
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label className="inputPassword4">Correo electrónico</label>
							<input
								type="email"
								className="form-control"
								id="inputPassword4"
								required
								value={email}
								onChange={e => {
									handleEmail(e);
								}}
							/>
						</div>
						<div className="form-group col-md-6">
							<label className="inputEmail4">Contraseña</label>
							<input
								type="password"
								className="form-control"
								id="inputEmail4"
								required
								value={password}
								onChange={e => {
									handlePassword(e);
								}}
							/>
						</div>
					</div>
					<span className="text-danger d-flex justify-content-center pt-3">{store.registerStatus.msg}</span>

					<div className="form-row mt-3">
						<div className="form-group col-md-6">
							<button
								type="button"
								className="btn btn-danger mr-2 btn-block"
								onClick={() => handleInformation()}>
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
