import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/productdetail.scss";

export const ProductDetail = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="myProductDetail">
			<div className="container h-100 ">
				<div className="jumbotron d-flex mt-5">
					<div className="col">
						<img
							style={{ "max-height": "350px" }}
							src="https://cuymar.com/noticias/wp-content/uploads/2018/12/como-funciona-suspension-neumatica.jpg"
							alt="..."
						/>
					</div>
					<div className="col">
						<h1 className="display-4">Suspención</h1>
						<hr className="my-4" />
						<p>
							Esta es una descripcion breve del componente del vehículo, en donde se explica las
							características
						</p>
						<div className="d-flex">
							<a className="btn btn-primary btn-lg" href="#" role="button">
								Comprar
							</a>
							<a className="btn btn-primary btn-lg" href="#" role="button">
								Agregar a favoritos &nbsp; <i className="far fa-heart"></i>
							</a>
						</div>
						<table className="table">
							<tbody>
								<tr>
									<td>Marca</td>
									<td>Bosh</td>
								</tr>
								<tr>
									<td>Vehículos compatibles</td>
									<td>Toyota tercer 2013, Nissan centra 2011</td>
								</tr>
							</tbody>
						</table>

						<div className="container d-flex">
							<button className="buttonSubtract" onClick={() => (count > 0 ? setCount(count - 1) : null)}>
								-
							</button>
							<h5>&nbsp;{count} &nbsp; </h5>
							<button className="buttonAdd" onClick={() => setCount(count + 1)}>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
