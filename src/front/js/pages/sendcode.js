import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Recovery = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	if (store.resetStatus.msg == "Code was generated, check your email.") {
		location.replace("/confirmcode");
	}
	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const sendResetCode = () => {
		let temp = {
			email: email
		};
		actions.postReset(temp);
	};

	return (
		<div className="container-fluid myLogin mt-5" style={{ minHeight: "100%" }}>
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-paper-plane fa-1x " />
				</div>
				<form>
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
						<span className="text-danger d-flex justify-content-center pt-3">{store.resetStatus.msg}</span>
					</div>

					{/* <Link to="/confirmcode"> */}
					<button type="button" className="btn btn-danger btn-block" onClick={() => sendResetCode()}>
						Enviar
					</button>
					{/* </Link> */}
					<hr className="my-3" />
					<Link to="/register" className="d-flex justify-content-center">
						<p>Crear cuenta</p>
					</Link>
				</form>
			</div>
		</div>
	);
};
