import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/productdetail.scss";

export const ProductDetail = () => {
	const [count, setCount] = useState(0);
	const [amount, setAmount] = useState(0);
	const price = 360000;

	return (
		<div className="myProductDetail mt-5 ">
			<div className="container h-100">
				<div className="jumbotron p-3 mt-5 myJumbo">
					<div className="row d-flex">
						<div className="col">
							<img
								style={{ maxHeight: "350px" }}
								src="https://cuymar.com/noticias/wp-content/uploads/2018/12/como-funciona-suspension-neumatica.jpg"
								alt="..."
							/>
							<p className="mt-2 ml-2 mr-4">
								Esta es una descripcion breve del componente del vehículo, en donde se explica las
								características
							</p>
						</div>
						<div className="col">
							<div className="d-flex justify-content-between">
								<h1 className="display-4">Suspención</h1>
								<i className="far fa-heart mt-4 mr-3" />
							</div>
							<hr className="my-3" />
							<div className="row d-flex mt-2 mb-3">
								<div className="col d-flex">
									<h3>Precio:&nbsp; </h3>
									<h3 className="display-6 text-danger">{price}</h3>
								</div>
								<div className="col d-flex justify-content-center align-self-center">
									<h3>Cantidad:&nbsp; </h3>
									<button
										className="buttonCount"
										onClick={() => (count > 0 ? setCount(count - 1) : null)}>
										-
									</button>
									<button
										type="button"
										className="buttonCount"
										onChange={() => setAmount(price * count)}>
										&nbsp;
										{count} &nbsp;
									</button>
									<button className="buttonCount" onClick={() => setCount(count + 1)}>
										+
									</button>
								</div>
							</div>
							<div className="row d-flex mt-2 mb-3">
								<div className="col d-flex align-self-center">
									<h3>Total: &nbsp; </h3>
									<h3 className="display-6 text-danger">{amount}</h3>
								</div>
								<div className="col">
									<button className="btn btn-danger btn-lg btn-block" href="#" type="button">
										Comprar &nbsp; <i className="fas fa-shopping-basket" />
									</button>
								</div>
							</div>
							<table className="table">
								<tbody>
									<tr>
										<td>
											<strong>Marca:</strong>
										</td>
										<td>Bosh</td>
									</tr>
									<tr>
										<td>
											<strong>Item:</strong>
										</td>
										<td>65491</td>
									</tr>
									<tr>
										<td>
											<strong>Código de parte:</strong>
										</td>
										<td>98494485</td>
									</tr>
									<tr>
										<td>
											<strong>Vehículos compatibles:</strong>
										</td>
										<td>Toyota tercer 2013, Nissan centra 2011</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
