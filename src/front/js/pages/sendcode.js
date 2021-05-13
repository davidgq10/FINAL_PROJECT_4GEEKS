import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Recovery = () => {
    return (
        <div className="myLogin">
            <div className="container-md mt-4 col-3 myForm p-4 rounded">
                <div className="row justify-content-center mb-2">
                    <i className="fas fa-paper-plane fa-1x " />
                </div>
                <form>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            id="validationCustom01"
                            required
                        />
                    </div>
					<Link to="/confirmcode">
						<button type="submit" className="btn btn-warning btn-block">
							Enviar código de recuperación
						</button>
					</Link>
                    <hr className="my-3" />
                    <Link to="/register" className="d-flex justify-content-center">
                        <p>Crear cuenta</p>
                    </Link>
                </form>
            </div>
        </div>
    );
};
