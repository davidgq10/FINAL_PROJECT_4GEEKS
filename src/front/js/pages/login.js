import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	console.log("Vista login:");
	console.log(store.loginResponse);
	console.log(store.loginToken);
	console.log(store.loginName);
	console.log(store.loginLastName);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [notification, setNotification] = useState("");

	if (store.loginResponse == "Login Succesful!") {
		location.replace("/product");
	}

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const accessLogin = () => {
		let temp = {
			email: email,
			password: password
		};
		actions.postLogin(temp);
	};
	return (
		<div className="myLogin mt-5">
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-user-circle fa-1x " />
				</div>
				<form className="needs-validation">
					<div className="form-group">
						<label className="exampleInputEmail1">Correo electrónico</label>
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							id="validationCustom01"
							required
							value={email}
							onChange={e => {
								handleEmail(e);
							}}
						/>
					</div>
					<div className="form-group">
						<label className="exampleInputPassword1">Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="validationCustom01"
							required
							value={password}
							onChange={e => {
								handlePassword(e);
							}}
						/>
						<span className="text-danger d-flex justify-content-center pt-3">{store.loginResponse}</span>
					</div>
					<button type="button" className="btn btn-danger btn-block" onClick={() => accessLogin()}>
						Ingresar
					</button>
					<div className="d-flex justify-content-center pt-2">
						<Link to="/recovery">Olvidaste tu contraseña?</Link>
					</div>
					<hr className="my-3" />
					<Link to="/register">
						<button type="submit" className="btn btn-dark btn-block">
							Crear cuenta
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
