import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/product.scss";

export const Product = () => {
	const { store, actions } = useContext(Context);

	//Hooks para administrar los estados de los dropdowns
	const [selectedmake, setSelectedMake] = useState("");
	const [selectedmodel, setSelectedModel] = useState("");
	const [selectedyear, setSelectedYear] = useState("");
	const [selectedpart, setSelectedPart] = useState(null);

	//Evento para añadir item al carrito
	const handleAdd = shop => {
		//if (shop != undefined) {
		actions.addFav(shop);
		//}
	};
	useEffect(() => {
		actions.loadProduct();
		actions.loadCars();
	}, []);

	//Define una const que almacena los valores de los cars para filtrarlas más adelante
	const APICars = store.cars;
	console.log("My store", APICars);
	console.log("My product", store.product);
	//Se define una constante que contiene todos los elementos filtrados según los criterios de búsqueda
	const FilterCars = () => {
		if (selectedmake && selectedmodel && selectedyear != "")
			return APICars.filter(
				car => car.Make == selectedmake && car.Model == selectedmodel && car.Year == selectedyear
			);
		if (selectedmake && selectedmodel != "")
			return APICars.filter(car => car.Make == selectedmake && car.Model == selectedmodel);
		if (selectedmake != "") return APICars.filter(car => car.Make == selectedmake);
		return APICars;
	};
	//Obtenemos los datos únicos de producto en cuanto a vehículos
	const uniqueMake = [...new Set(APICars.map(item => item.Make))];

	//La siguiente constante almacena el valor de los productos filtrados.
	const filterObjectProduct = () =>
		store.product.filter(item => FilterCars().some(car => car.objectId == item.Cardid));

	//La siguiente constante almacena el mapeo de las card, será llamado posteriormente en el ultimo bloque que renderiza el objeto
	let getCards =
		//generamos las card con el map
		filterObjectProduct().map((item, index) => {
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
							<div className="card-text">
								<strong>Empresa:</strong> Pendiente asfignar valor
							</div>
							<div className="dropdown-divider" />
							<div className="d-flex justify-content-between">
								<Link to={"/productdetail/" + index}>
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

	//Obtiene los distintos modelos del objeto,
	const getMakes = () => {
		return uniqueMake.map((item, index) => {
			return (
				<option key={index} value={item}>
					{item}
				</option>
			);
		});
	};
	//Filtrado de modelos según marca seleccionado
	const getModels = () => {
		const filterModels = APICars.filter(car => car.Make == selectedmake);
		const uniqueModel = [...new Set(filterModels.map(item => item.Model))];
		return uniqueModel.map((item, index) => {
			return (
				<option key={index} value={item}>
					{item}
				</option>
			);
		});
	};

	//Filtrado de años según modelo seleccionado
	const getYears = () => {
		const filterYears = APICars.filter(car => car.Model == selectedmodel);
		const uniqueYear = [...new Set(filterYears.map(item => item.Year))];
		return uniqueYear.map((item, index) => {
			return (
				<option key={index} value={item}>
					{item}
				</option>
			);
		});
	};

	//Eventos que se ejectutan al cambiar los valores de los dropdown
	const handleChangeMake = e => {
		setSelectedMake(e.target.value);
	};
	const handleChangeModel = e => {
		setSelectedModel(e.target.value);
	};
	const handleChangeYear = e => {
		setSelectedYear(e.target.value);
	};
	const handleChangePart = e => {
		setSelectedPart(e.target.value);
	};

	//El siguiente bloque de código retorna el objeto a mostrar
	return (
		<div className="myProduct">
			{/* En esta sección se construye el menu de filtros */}
			<div className="container mt-5">
				<form>
					<div className="row justify-content-center bg-dark rounded-bottom rounded-3 pt-2">
						<div className="form-group col-3">
							<label className="exampleFormControlSelect1 text-warning">Marca</label>
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								onChange={e => handleChangeMake(e)}>
								<option></option>
								{getMakes()}
							</select>
						</div>
						<div className="form-group col-3">
							<label className="exampleFormControlSelect1 text-warning">Modelo</label>
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								onChange={e => handleChangeModel(e)}>
								<option></option>
								{getModels()}
							</select>
						</div>
						<div className="form-group col-2">
							<label className="exampleFormControlSelect1 text-warning">Año</label>
							<select
								className="form-control"
								onChange={e => handleChangeYear(e)}
								placeholder="Seleccione"
								id="exampleFormControlSelect1">
								<option></option>
								{getYears()}
							</select>
						</div>
						<div className="form-group col-2">
							<label className="formGroupExampleInput text-warning">Código de parte</label>
							<input
								type="text"
								className="form-control border"
								id="formGroupExampleInput"
								onChange={e => handleChangePart(e)}
								placeholder="Código"
								style={{ height: "38px" }}
								// value={selectedpart}
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
