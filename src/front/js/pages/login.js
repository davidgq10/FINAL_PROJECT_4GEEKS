import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Login = () => {
	return (
		<div className="container-fluid bg-info">
			<h1 className="text-left pl-0"> Mauricio APP</h1>
			<div className="row">
				<button type="button" classNameName="btn btn-primary ml-5" col-sm>
					Are new? Please Login Here!!
				</button>
			</div>
		</div>
	);
};
