import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Card, Container, Row } from "react-bootstrap";

export const Homed = () => {
	return (
		<div>
			<Jumbotron>
				<h1 className="text-primary">Hello, world!</h1>
				<p className="text-ColorAzulOscuro">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<p>
					<Button variant="success">Learn more</Button>
				</p>
			</Jumbotron>
			<Container>
				<Row className="justify-content-md-center">
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://ccmechanic.com/wp-content/uploads/2021/03/cc-mechanic-e1616486913317.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://ccmechanic.com/wp-content/uploads/2021/03/cc-mechanic-e1616486913317.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://ccmechanic.com/wp-content/uploads/2021/03/cc-mechanic-e1616486913317.png"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</div>
	);
};
