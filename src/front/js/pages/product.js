import React from "react";
import { Container, Carousel, Row, Col, CarouselCaption, CarouselItem } from "react-bootstrap";
import { cluth } from "../../img/cluth.jpg";
import { frenos } from "../../img/frenos.jpg";
import { suspension } from "../../img/suspension.png";

export const Product = () => {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col xs={12} md={8}>
					fila para parte superior
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col xs={12} md={8}>
					<Carousel>
						<Carousel.Item interval={1000}>
							<img
								className="d-block w-100"
								src="frenos.jpg"
								alt="First slide"
								width="10px"
								height="200px"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className="d-block w-100"
								src="cluth.jpg"
								alt="Second slide"
								width="10px"
								height="200px"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="suspension.png"
								alt="Third slide"
								width="10px"
								height="200px"
							/>
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col xs={12} md={8}>
					<Carousel>
						<Carousel.Item interval={1000}>
							<img
								className="d-block w-100"
								src="frenos.jpg"
								alt="First slide"
								width="10px"
								height="200px"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img
								className="d-block w-100"
								src="cluth.jpg"
								alt="Second slide"
								width="10px"
								height="200px"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="suspension.png"
								alt="Third slide"
								width="10px"
								height="200px"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};
