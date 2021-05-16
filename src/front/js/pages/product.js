import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { engranaje } from "../../img/engranaje.png";
import { Repuesto } from "../component/repuesto";
import { Link } from "react-router-dom";
import "../../styles/product.scss";

export const Product = () => {
	const { store, actions } = useContext(Context);
	const handleAdd = shop => {
		//if (shop != undefined) {
		actions.addFav(shop);
		//}
	};
	useEffect(() => {
		actions.loadProduct();
	}, []);
	//  La siguiente constante contiene la información de prueba para las card

	//La siguiente constante almacena el mapeo de las card, será llamado posteriormente en el ultimo bloque que renderiza el objeto
	let getCards = store.product.map((item, index) => {
		// el siguiente código genera el botón de favorito  relleno o vacío según la data en lista de favoritos
		// function getButton(name) {
		// 	return (
		// 		<div
		// 			className="btn"
		// 			onClick={!store.favorites.includes(name) ? () => actions.setFavorites(name) : null}
		// 			variant="outline-warning float-right">
		// 			{!store.favorites.includes(name) ? <i className="far fa-heart" /> : <i className="fas fa-heart" />}
		// 		</div>
		// 	);
		// }

		return (
			<div key={index}>
				<div className="card m-2">
					<img src={item.enlace} className="card-img-top" alt="..." width="100" height="150" />
					<div className="card-body">
						<div className="card-title">{item.nombre}</div>
						<div className="dropdown-divider" />
						<div className="card-text">
							<strong>Marca:</strong> {item.marca}
						</div>
						<div className="card-text">
							<strong>Categoría:</strong> {item.categoria}
						</div>
						<div className="card-text">
							<strong>Precio:</strong> {item.precio}
						</div>
						<div className="card-text">
							<strong>Item:</strong> {item.item}
						</div>
						<div className="dropdown-divider" />
						<div className="d-flex justify-content-between">
							<Link to={"/productdetail"}>
								<div className="btn btn-dark btn-block" variant="outline-primary">
									Detalles
								</div>
							</Link>
							<div
								className="btn btn-danger float-right"
								onClick={evento => {
									handleAdd(item.nombre);
								}}>
								<i className="fas fa-shopping-cart" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});

	//El siguiente bloque de código retorna el objeto a mostrar
	return (
		<div className="myProduct">
			{/* En esta sección se construye el menu de filtros */}
			<div className="container mt-5">
				<form>
					<div className="row justify-content-center bg-dark rounded-bottom rounded-3 pt-2">
						<div className="form-group col-3">
							<label className="exampleFormControlSelect1 text-warning">Marca</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Toyota</option>
								<option>Nissan</option>
								<option>BMW</option>
							</select>
						</div>
						<div className="form-group col-3">
							<label className="exampleFormControlSelect1 text-warning">Modelo</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>Corolla</option>
								<option>Land Cruiser</option>
								<option>M3</option>
								<option>Centra</option>
								<option>Frontier</option>
							</select>
						</div>
						<div className="form-group col-2">
							<label className="exampleFormControlSelect1 text-warning">Año</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>2000</option>
								<option>2005</option>
								<option>2010</option>
								<option>2015</option>
								<option>2020</option>
							</select>
						</div>
						<div className="form-group col-2">
							<label className="formGroupExampleInput text-warning">Código de parte</label>
							<input
								type="text"
								clasclassNames="form-control form-control-lg border border-info bg-warning"
								id="formGroupExampleInput"
								placeholder="Digite el código"
								style={{ height: "38px" }}
							/>
						</div>
					</div>
				</form>
			</div>
			{/* En esta sección se contruye el contenedor con las card */}
			<div className="container myCard mt-2 mb-5">
				<h3 className="text-light">Repuestos disponibles</h3>
				<div className="card-deck row-cols-4 mb-5 pb-4">{getCards}</div>
			</div>
		</div>
	);
};
