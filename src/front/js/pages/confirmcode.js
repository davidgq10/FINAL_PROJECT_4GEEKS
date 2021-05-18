import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const ConfirmCode = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");

	if (store.resetCode.msg == "Valid Code!") {
		actions.saveEmail(email);
		location.replace("/changepassword");
	}
	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handleCode = e => {
		setCode(e.target.value);
	};

	const validateCode = () => {
		let temp = {
			email: email,
			code: code
		};

		actions.postValidation(temp);
	};
	return (
		<div className="container-fluid myLogin mt-5" style={{ minHeight: "100%" }}>
			<div className="container-md mt-4 col-3 myForm p-4 rounded">
				<div className="row justify-content-center mb-2">
					<i className="fas fa-keyboard" />
				</div>
				<form className="needs-validation">
					<div className="form-group">
						<label className="exampleInputEmail1">Digitar nuevamente el correo electrónico</label>
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
						<label className="exampleInputEmail1">Ingresar el código enviado al correo electrónico</label>
						<input
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
							id="validationCustom02"
							required
							value={code}
							onChange={e => {
								handleCode(e);
							}}
						/>
						<span className="text-danger d-flex justify-content-center pt-3">{store.resetCode.msg}</span>
					</div>

					{/* <Link to="/changepassword"> */}
					<button type="button" className="btn btn-danger btn-block" onClick={() => validateCode()}>
						Verificar
					</button>
					{/* </Link> */}
					<hr className="my-3" />
					<Link to="/" className="d-flex justify-content-center">
						<p>Cancelar</p>
					</Link>
				</form>
			</div>
		</div>
	);
};
