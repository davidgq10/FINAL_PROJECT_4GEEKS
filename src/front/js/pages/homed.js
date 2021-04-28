import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button } from "react-bootstrap";

export const Homed = () => {
	return (
		<Jumbotron>
			<h1>Hello, world!</h1>
			<p>
				This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
				content or information.
			</p>
			<p>
				<Button variant="success">>Learn more</Button>
			</p>
		</Jumbotron>
	);
};
