import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Img from "../../img/engranaje.png";

export const Register = () => {
	return (
		<div className="container">
			<div className="bg-ColorClaro">
				<h1 className="text-center pb-5"> Mauricio APP</h1>
			</div>
			<div className="row">
				{/* LEFT PANEL */}
				<div className="bg-ColorClaro col-4">
					<div className="row d-flex justify-content-center bg-ColorClaro">
						<div className="form-group widthForm col-lg-9 ">
							{/* Name */}
							<label>
								<strong>Name </strong>{" "}
							</label>
							<input type="text" className="form-control " id="name" placeholder="Name" />
							{/* Last Name*/}
							<label className="pt-5">
								<strong> Last Name </strong>
							</label>
							<input type="text" className="form-control " id="lastName" placeholder="Last Name" />
							{/* E-mail */}
							<label className="pt-5">
								<strong> E-Mail </strong>
							</label>
							<input type="mail" className="form-control " id="registerEmail" placeholder="E-Mail" />
							{/* User */}
							<label className="pt-5">
								<strong>User </strong>
							</label>
							<input type="text" className="form-control " id="registerUser" placeholder="User" />
						</div>
					</div>
				</div>
				{/* RIGHT PANEL */}
				<div className="bg-ColorClaro col-4">
					<div className="row d-flex justify-content-center bg-ColorClaro">
						<div className="form-group widthForm col-lg-9 ">
							{/* Country */}
							<div className="form-group">
								<label>
									<strong>Country </strong>
								</label>
								<select className="form-control" id="sel1">
									<option>Costa Rica</option>
									<option>USA</option>
									<option>Chile</option>
									<option>Argentina</option>
								</select>
							</div>
							{/* Adress Line 1 */}
							<label className="pt-4">
								<strong>Adreess Line 1 </strong>{" "}
							</label>
							<input type="text" className="form-control " id="line1" placeholder="" />
							{/* Adress Line 2*/}
							<label className="pt-5">
								<strong> Adress Line 2 </strong>
							</label>
							<input type="text" className="form-control " id="line2" placeholder="" />
							{/* Password */}
							<label className="pt-5">
								<strong> Password </strong>
							</label>
							<input
								type="password"
								className="form-control "
								id="registerPassword"
								placeholder="Password"
							/>
						</div>
					</div>
				</div>
				<div className="bg-ColorClaro col-4">
					<br />
					<br />
					<br />
					<br />
					<div className="row bg-ColorClaro ">
						<div className="col d-flex justify-content-center">
							<button type="button" className="btn btn-lg btn-ColorAzulOscuro col-lg-12">
								Register
							</button>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />

					<div className="row bg-ColorClaro ">
						<div className="col d-flex justify-content-center">
							<button type="button" className="btn btn-lg btn-danger col-lg-12">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
