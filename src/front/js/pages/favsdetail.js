import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PaypalExpressBtn from "../component/paypalbutton";
import "../../styles/favsdetail.scss";

export const Favs = () => {
	const { store, actions } = useContext(Context);
	console.log("Mi favs", store.favs);
	console.log("Mi favs from database", store.productsByID);

	const myFavFromDB = store.productsByID;

	const client = {
		sandbox: "ARPLSZVVpgonARZIUYTeYZVoCQJPkYqNIuYdYfvSkm_2lkd8oItc1G3C5PpZZ1987IlKFLdc4ufXYmc6",
		production: "sb-b3gbr6252396@business.example.com"
	};

	let varTotal = 0;

	const orderItems = myFavFromDB.map((item, index) => {
		{
			varTotal = varTotal + store.favs.find(prod => prod.id == item.product_id).precio * item.quantity;
		}
		return (
			<tr key={index}>
				<th scope="row">{index + 1}</th>
				<td>{store.favs.find(prod => prod.id == item.product_id).nombre}</td>
				<td>{store.favs.find(prod => prod.id == item.product_id).marca}</td>
				<td>{store.favs.find(prod => prod.id == item.product_id).item}</td>
				<td>{store.favs.find(prod => prod.id == item.product_id).categoria}</td>
				<td className="text-center">{item.quantity}</td>
				<td className="text-right  pr-4">
					{Math.round(store.favs.find(prod => prod.id == item.product_id).precio) * item.quantity}
				</td>
			</tr>
		);
	});

	return (
		<div className="container-fluid myFav" style={{ backgroundPosition: "cover" }}>
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
				<div className="d-flex justify-content-center mb-5 pb-5 col-6 float-right">
					{/* <button type="button" className="btn btn-danger btn-lg btn-block w-50">
						<i className="fab fa-cc-paypal fa-1x"></i> &nbsp; Procesar pago
					</button> */}
					<PaypalExpressBtn total={Math.round((varTotal * 1.13) / 610, -2)} />
				</div>
			</div>
		</div>
	);
};
