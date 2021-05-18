import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Img from "../../img/engranaje.png";
import { Link } from "react-router-dom";

export const Reset = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [code, setCode] = useState("");

	// // This is for redirect to a view
	if (store.resetStatus.msg == undefined) {
	} else if (store.resetStatus.msg == "Password updated!") {
		location.replace("/login");
	}

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handleCode = e => {
		setCode(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const handlePassword2 = e => {
		setPassword2(e.target.value);
	};

	const validateCode = () => {
		let temp = {
			email: email,
			code: code
		};
		actions.postValidation(temp);
	};

	const resetPassword = () => {
		if (password == password2) {
			validateCode();
			console.log("Estoy dentro de la 1 validacion");
			setTimeout(() => {
				if (store.resetCode.msg == "Valid Code!") {
					console.log("Estoy dentro de la 2 validacion");
					changePassword();
				}
			}, 1000);
		} else {
			console.log("Datos no coinciden.");
		}
	};

	const changePassword = () => {
		let temp = {
			email: email,
			password: password2
		};
		actions.putPassword(temp);
	};

	return (
		<div className="container-fluid" style={{ minHeight: "100%" }}>
			<div className="container-fluid bg-ColorClaro">
				<h1 className="text-left pl-0"> Mauricio APP</h1>
			</div>

			<div className="row">
				<div className="bg-ColorClaro col-6">
					<img
						src="engranaje.png"
						className="img-thumbnail pt-5 pl-5 bg-ColorClaro border-0"
						alt="..."
						width="400"
						height="400"
					/>
				</div>
				<form />
				<div className="d-flex justify-content-end bg-ColorClaro pr-5 col-6">
					<div className="row bg-ColorClaro ">
						<div className="form-group widthForm col-lg-12 ">
							{/* Email Adreess */}
							<label className="d-flex justify-content-center">
								<strong>Email address </strong>{" "}
							</label>
							<input
								type="mail"
								className="form-control "
								id="exampleFormControlInput1"
								placeholder="name@example.com"
								value={email}
								onChange={e => {
									handleEmail(e);
								}}
							/>
							{/* Confirmation Code*/}
							<label className="d-flex justify-content-center pt-5">
								<strong> Confirmation Code </strong>
							</label>
							<input
								type="text"
								className="form-control "
								id="confirmationCode"
								placeholder="Enter your confirmation code"
								value={code}
								onChange={e => {
									handleCode(e);
								}}
							/>
							{/* New Password */}
							<label className="d-flex justify-content-center pt-5">
								<strong> New Password </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="newPassword"
								placeholder="New Password"
								value={password}
								onChange={e => {
									handlePassword(e);
								}}
							/>
							{/* Confirm New Password */}
							<label className="d-flex justify-content-center pt-5">
								<strong> Confirm New Password </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="confirmNewPassword"
								placeholder="Confirm New Password"
								value={password2}
								onChange={e => {
									handlePassword2(e);
								}}
							/>
						</div>
						<div className="mt-5 col-lg-12 bg-ColorClaro d-flex justify-content-center">
							<button
								type="button"
								className="btn btn-ColorAzulOscuro mr-5 col-lg-6"
								onClick={() => resetPassword()}>
								Change Password
							</button>
							<a href="/login" className="btn btn-danger col-lg-6" role="button" aria-pressed="true">
								Cancel
							</a>
							{/* <button type="button" className="btn btn-danger col-lg-6" href="/login">
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
