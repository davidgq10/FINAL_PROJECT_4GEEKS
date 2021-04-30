import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Homed = () => {
	return (
		<div>
			{/*Sección de Jumbotron*/}
			<div className="jumbotron">
				<h1 className="text-primary">Hello, world!</h1>
				<p className="text-ColorAzulOscuro">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<p>
					<button type="button" className="btn btn-primary">
						Primary
					</button>
				</p>
				{/*Sección de Cards*/}
				<div className="container">
					<div className=" row justify-content-md-center">
						<div className="card-deck">
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMgyoZcAFjcYu6mZKjmqXEFeoS8lDZt2egw&usqp=CAU"
									className="card-img-top img-m50"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMgyoZcAFjcYu6mZKjmqXEFeoS8lDZt2egw&usqp=CAU"
									className="card-img-top img-m50"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMgyoZcAFjcYu6mZKjmqXEFeoS8lDZt2egw&usqp=CAU"
									className="card-img-top img-m50"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMgyoZcAFjcYu6mZKjmqXEFeoS8lDZt2egw&usqp=CAU"
									className="card-img-top img-m50"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
