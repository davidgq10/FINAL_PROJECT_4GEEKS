import React from "react";
import { cluth } from "../../img/cluth.jpg";
import { frenos } from "../../img/frenos.jpg";
import { suspension } from "../../img/suspension.png";

export const Product = () => {
	return (
		<div className="container">
			<div className="row align-items-start">
				<div className="col-8">
					<div className="col">One of three columns</div>
					<div className="col">One of three columns</div>
					<div className="col">One of three columns</div>
				</div>
			</div>
			<div className="row align-items-center " />
			<div className="col ">
				<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						/>
					</div>
					<div className="carousel-inner">
						<div className={(`carousel-item active`, `carousel-control-prev`, `carousel-control-next`)} />
						<div className={(`carousel-item`, `prev`, `next`)} />
						<div className={(`carousel-item`, `prev`, `next`)} />

						<div className="carousel-item active">
							<img
								src="suspension.png"
								className="d-block w-100"
								width="100px"
								height="200px"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img src="frenos.jpg" className="d-block w-100" width="100px" height="200px" alt="..." />
						</div>
						<div className="carousel-item">
							<img src="cluth.jpg" className="d-block w-100" width="100px" height="200px" alt="..." />
						</div>
					</div>

					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};
