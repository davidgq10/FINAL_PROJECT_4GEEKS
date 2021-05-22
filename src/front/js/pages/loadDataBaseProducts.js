import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/product.scss";

export const CargarBase = () => {
	const { store, actions } = useContext(Context);

	let listaProducts = [
		{
			cardid: "ZRgPP9dBMm",
			categoria: "Suspensión",
			enlace: "https://cdn.autoersatzteile.de/uploads/360_photos/1241456/h-preview.jpg",
			// id: 1,
			item: 123,
			marca: "555",
			nombre: "Rótula",
			precio: 25000,
			company: "Repuestos Chino"
		},
		{
			cardid: "cptB1C1NSL",
			categoria: "Transmisión",
			enlace:
				"https://eldiariony.com/wp-content/uploads/sites/2/2015/08/im_20140902_autos_140909927.jpg?quality=60&strip=all&w=960",
			// id: 2,
			item: 5678,
			marca: "Original",
			nombre: "Caja de cambios",
			precio: 350000,
			company: "Super Repuestos"
		},
		{
			cardid: "ElhqsRZDnP",
			categoria: "Motor",
			enlace:
				"https://cdn11.bigcommerce.com/s-jf84aish/images/stencil/1280x1280/products/3891/12304/k0378xs__86887.1535573451.jpg?c=2?imbypass=on",
			// id: 3,
			item: 2375,
			marca: "Wiseco",
			nombre: "Piston",
			precio: 150000,
			company: "Repuestos San José"
		},
		{
			cardid: "1JARpJ2AUB",
			categoria: "Frenos",
			enlace: "https://cdn.autodoc.de/uploads/360_photos/7628806/h-preview.jpg",
			// id: 6,
			item: 3185,
			marca: "Kashima",
			nombre: "Fibras",
			precio: 20000,
			company: "Repuestos Chino"
		},
		{
			cardid: "LUzyWMYJpW",
			categoria: "Frenos",
			enlace:
				"https://cdn10.bigcommerce.com/s-xk32d/products/800/images/5029/InkedBrembo_M50_LI__75620.1547863436.1280.1280.jpg?c=2",
			// id: 23,
			item: 4001,
			marca: "Brembo",
			nombre: "Caliper",
			precio: 60000,
			company: "Repuestos La Guaco"
		},
		{
			cardid: "rDkHakOBKP",
			categoria: "Eléctrico",
			enlace: "https://cdn.autoersatzteile.de/uploads/360_photos/13625625/h-preview.jpg",
			// id: 25,
			item: 6497,
			marca: "Bosh",
			nombre: "Alternador",
			precio: 145000,
			company: "Repuestos La Guaco"
		},
		{
			cardid: "4q7L9FAU2S",
			categoria: "Dirección",
			enlace: "https://www.motorok.com/wp-content/uploads/reten-del-cigueenal.jpg",
			// id: 26,
			item: 5375,
			marca: "Payen",
			nombre: "Retenedor",
			precio: 15000,
			company: "Maxi repuestos"
		},
		{
			cardid: "7G1VT2pSNO",
			categoria: "Embrague",
			enlace: "https://www.diariomotor.com/imagenes/2019/08/embrague-coche-como-funciona-1.jpg",
			id: 27,
			item: 7319,
			marca: "Valeo",
			nombre: "Conjunto de Cluth",
			precio: 750000,
			company: "Maxi repuestos"
		},
		{
			cardid: "jpOC5zs3jx",
			categoria: "Sistema de arranque",
			enlace: "https://cdn.pkwteile.de/uploads/360_photos/8262606/h-preview.jpg",
			// id: 28,
			item: 1447,
			marca: "Bosh",
			nombre: "Motor de Arranque",
			precio: 80000,
			company: "Distribuidora Centinela"
		},
		{
			cardid: "96llWfTOAe",
			categoria: "Suspensión",
			enlace:
				"https://decamino.firststop.es/hs-fs/hubfs/amortiguador-coche.jpg?width=1920&name=amortiguador-coche.jpg",
			// id: 29,
			item: 3001,
			marca: "Kayaba",
			nombre: "Amortiguadores",
			precio: 60000,
			company: "Distribuidora Centinela"
		},
		{
			cardid: "5OEvsF1R9k",
			categoria: "Motor",
			enlace: "https://www.mundorepuesto.com/imgparts/parts/CLO/9-0711sx.jpg",
			// id: 1,
			item: 5821,
			marca: "EK",
			nombre: "Distribución",
			precio: 112500,
			company: "Repuestos San José"
		},
		{
			cardid: "LNq3duGh9z",
			categoria: "Sistema de Encendido",
			enlace: "https://images-na.ssl-images-amazon.com/images/I/91LQA12EIcL._AC_SL1500_.jpg",
			// id: 2,
			item: 11465,
			marca: "Bosh",
			nombre: "Bobinas de Encendido",
			precio: 75000,
			company: "Distribuidora Centinela"
		},
		{
			cardid: "FThs77Cddn",
			categoria: "Electrónico",
			enlace: "https://www.lacomunidaddeltaller.es/wp-content/uploads/2014/05/Bosch-EDC-15P-1.jpg",
			// id: 3,
			item: 178,
			marca: "Bosh",
			nombre: "ECU",
			precio: 300000,
			company: "Repuestos San José"
		},
		{
			cardid: "cWQjuYWwc2",
			categoria: "Dirección",
			enlace: "https://images-na.ssl-images-amazon.com/images/I/61h2zD8mujL._AC_SL1500_.jpg",
			// id: 5,
			item: 4132,
			marca: "Original",
			nombre: "Bomba Hidráulica",
			precio: 85000,
			company: "Repuestos La Guaco"
		},
		{
			cardid: "2lYY81jKzR",
			categoria: "Electrónico",
			enlace: "https://images-na.ssl-images-amazon.com/images/I/81WBoX1aoyL._AC_SL1500_.jpg",
			// id: 6,
			item: 2107,
			marca: "Bosh",
			nombre: "Cuerpo de Aceleración",
			precio: 135000,
			company: "Maxi repuestos"
		},
		{
			cardid: "t9eGFMIk7E",
			categoria: "Motor",
			enlace: "https://images-na.ssl-images-amazon.com/images/I/71n8BkQGzWL._AC_SL1500_.jpg",
			// id: 4,
			item: 3012,
			marca: "Original",
			nombre: "Válvulas",
			precio: 250000,
			company: "Repuestos La Guaco"
		}
	];

	let favorito = {
		product_id: 3,
		quantity: 5
	};

	// Obtener la lista del carrito
	const loadDataBaseFunction = () => {
		listaProducts.map((item, index) => {
			actions.postProduct(item);
		});
	};

	// Obtener la lista del carrito
	const getCarList = () => {
		actions.getListbyID(sessionStorage.getItem("id"));
	};

	// Agregar al carrito
	const addCar = (data, id) => {
		actions.postListbyID(data, id);
	};

	//Borrar elemento del carrito
	const deleteItem = id => {
		actions.deleteListbyID(id);
	};

	return (
		<div className="container">
			<div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					loadDataBaseFunction();
				}}>
				Cargar base de datos
			</button>
			<br></br>
			<br></br>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					getCarList();
				}}>
				Obtener carrito
			</button>
			<br></br>
			<br></br>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					addCar(favorito, 1);
				}}>
				Agregar al carrito
			</button>
			<br></br>

			<br></br>
			<br></br>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					deleteItem(2);
				}}>
				Borrar item
			</button>

			<br></br>
			<br></br>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					actions.reloadCar(1);
				}}>
				cargar carrito
			</button>
			<br></br>
			<br></br>
			<button
				type="button"
				className="btn btn-danger btn-lg"
				onClick={() => {
					actions.putQuantity(26, 20);
				}}>
				HACER PUT.
			</button>
		</div>
	);
};
