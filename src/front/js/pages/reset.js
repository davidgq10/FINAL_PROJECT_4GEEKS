import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Img from "../../img/engranaje.png";
import { Link } from "react-router-dom";

export const Reset = () => {
	return (
		<div className="container">
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
							/>
							{/* Confirmation Code*/}
							<label className="d-flex justify-content-center pt-5">
								<strong> Confirmation Code </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="confirmationCode"
								placeholder="Enter your confirmation code"
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
							/>
						</div>
						<div className="mt-5 col-lg-12 bg-ColorClaro d-flex justify-content-center">
							<button type="button" className="btn btn-ColorAzulOscuro mr-5 col-lg-6">
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
