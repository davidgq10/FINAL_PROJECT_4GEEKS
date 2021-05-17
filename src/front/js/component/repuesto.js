// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { ProductDetail } from "../pages/productdetail";

// export const Repuesto = props => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<>
// 			<div className="card mx-1 " style={{ width: "18rem;" }}>
// 				<img
// 					className="card-img-top"
// 					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ozoKHg52hKzrpQmXpp9MUmlkQP3KXnW7w&usqp=CAU"
// 					alt="Card image cap"
// 				/>
// 				<div className="card-body">
// 					<h5 className="card-title">{props.categoria}</h5>
// 					<p className="card-text">{props.item}</p>
// 					<p className="card-text">{props.marca} </p>

// 					<Link to={"/productdatail/" + props.id1}>
// 						<div className=" text-left">
// 							<button type="button" className="btn shadow-none  text-danger float-right ">
// 								<h1>♥</h1>
// 							</button>

// 							<button className="btn btn-primary mr-5   mt-3">Detalles</button>
// 						</div>
// 					</Link>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
