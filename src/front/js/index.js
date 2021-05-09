//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/theme.scss";
//import "../styles/home.scss";
//import "../styles/product.scss";

//include your theme.scss file into the bundle

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
