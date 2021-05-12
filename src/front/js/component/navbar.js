import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-center mb-0">
			<div className="container">
				<div className="col d-flex justify-content-start">
					<Link to="/">
						<span className="navbar-brand mb-0 ">
							<i className="fas fa-cogs" /> &nbsp;EasyPartsCR
						</span>
					</Link>
				</div>

				<div className="col d-flex justify-content-center">
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Productos</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/register">
						<span className="navbar-brand mb-0 ">Registro</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/">
						<span className="navbar-brand mb-0 ">Vender</span>
					</Link>
					<span className="navbar-brand mb-0 ">|</span>
					<Link to="/product">
						<span className="navbar-brand mb-0 ">Soporte</span>
					</Link>
				</div>

				<div className="col d-flex justify-content-end">
					<Link to="/login">
						<span className="navbar-brand mb-0 ">
							<i className="fas fa-user-circle fa-1x" />
							&nbsp; Iniciar sesión
						</span>
					</Link>
					<span className="dropdown d-flex align-items-center">
						<i
							className="fas fa-shopping-cart fa-2x dropdown-toggle align-middle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="badge badge-pill badge-light">4</span>
						</i>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								<div className="d-flex flex-row justify-content-between bd-highlight align-items-center">
									<img
										style={{ height: "30px" }}
										src="https://cuymar.com/noticias/wp-content/uploads/2018/12/como-funciona-suspension-neumatica.jpg"
										alt="..."
									/>
									<div className="p-2 bd-highlight">suspension</div>
									<button type="button" className="btn btn-light">
										<i className="fas fa-trash-alt"></i>
									</button>
								</div>
							</a>
							<a className="dropdown-item" href="#">
								<div className="d-flex flex-row justify-content-between bd-highlight align-items-center">
									<img
										style={{ height: "30px" }}
										src="https://cuymar.com/noticias/wp-content/uploads/2018/12/como-funciona-suspension-neumatica.jpg"
										alt="..."
									/>
									<div className="p-2 bd-highlight">suspension</div>
									<button type="button" className="btn btn-light">
										<i className="fas fa-trash-alt"></i>
									</button>
								</div>
							</a>
							<a className="dropdown-item" href="#">
								<div className="d-flex flex-row justify-content-between bd-highlight align-items-center">
									<img
										style={{ height: "30px" }}
										src="https://cuymar.com/noticias/wp-content/uploads/2018/12/como-funciona-suspension-neumatica.jpg"
										alt="..."
									/>
									<div className="p-2 bd-highlight">suspension</div>
									<button type="button" className="btn btn-light">
										<i className="fas fa-trash-alt"></i>
									</button>
								</div>
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Ir al carrito &nbsp; <i className="fas fa-shopping-basket"></i>
							</a>
						</div>
					</span>
				</div>
			</div>
		</nav>
	);
};
