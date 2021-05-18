import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/favsdetail.scss";

export const Favs = () => {
	const { store, actions } = useContext(Context);

	let varTotal = 0;

	const orderItems = store.favs.map((item, index) => {
		{
			varTotal = varTotal + item.precio;
		}
		return (
			<tr key={index}>
				<th scope="row">{index + 1}</th>
				<td>{item.nombre}</td>
				<td>{item.marca}</td>
				<td>{item.item}</td>
				<td>{item.categoria}</td>
				<td className="text-center">1</td>
				<td className="text-right  pr-4">{Math.round(item.precio)}</td>
			</tr>
		);
	});

	return (
		<div className="container-fluid myFav" style={{ minHeight: "100%" }}>
			<div className="container flex-column mt-5 mb-5 pt-4 pb-4 h-auto">
				<div className="text-light">
					<h1>Detalle del pedido</h1>
				</div>
				<table className="table myTable rounded">
					<thead className="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Marca</th>
							<th scope="col">Item</th>
							<th scope="col">Categoría</th>
							<th scope="col">Cantidad</th>
							<th scope="col">Precio</th>
						</tr>
					</thead>
					<tbody>{orderItems}</tbody>
				</table>
				<div className="d-flex justify-content-end">
					<table className="table myTable w-50 mt-3 mb-5 rounded">
						<tr>
							<th scope="col"></th>
							<th scope="col"></th>
							<th scope="col">Subtotal</th>
							<th scope="col" className="text-danger text-right  pr-4">
								{Math.round(varTotal, -2)}
							</th>
						</tr>
						<tr>
							<th scope="col"></th>
							<th scope="col"></th>
							<th scope="col">IVA</th>
							<th scope="col" className="text-danger text-right  pr-4">
								{Math.round(varTotal * 0.13, -2)}
							</th>
						</tr>
						<tr>
							<th scope="col"></th>
							<th scope="col"></th>
							<th scope="col">Total</th>
							<th scope="col" className="text-danger text-right pr-4">
								{Math.round(varTotal * 1.13, -2)}
							</th>
						</tr>
					</table>
				</div>
				<div className="d-flex justify-content-end mb-5 pb-5">
					<button type="button" className="btn btn-danger btn-lg btn-block w-50">
						<i className="fab fa-cc-paypal fa-1x"></i> &nbsp; Procesar pago
					</button>
				</div>
			</div>
		</div>
	);
};
