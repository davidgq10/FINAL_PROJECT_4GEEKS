import React from "react";
import { Link } from "react-router-dom";

export const Repuesto = () => {
	return (
		<>
			<div className="card mx-1 " style={{ width: "18rem;" }}>
				<img
					className="card-img-top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ozoKHg52hKzrpQmXpp9MUmlkQP3KXnW7w&usqp=CAU"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text"></p>
					<p className="card-text"></p>

					<Link to="/">
						<div className=" text-left">
							<button type="button" className="btn shadow-none  text-danger float-right ">
								<h1>♥</h1>
							</button>

							<button className="btn btn-primary mr-5   mt-3">Detalles</button>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
