const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			register: [],
			registerStatus: [], // This the register request response
			resetStatus: [], // This the reset request response
			resetCode: [], // This is a code validation response
			passwordResponse: [],
			loginResponse: [],
			currentEmail: [],
			product: [],
			loginToken: [],
			loginName: [],
			loginLastName: [],
			logoutStatus: [],
			favs: [],
			cars: [], // Aquí se almacenan los modelos de los carros que genera la API
			productsByID: [], //Lista con respecto al modelo
			productToDelete: [] //Este es el elemento a eliminar
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadCars: async () => {
				const response = await fetch(
					"https://parseapi.back4app.com/classes/Car_Model_List?limit=20&excludeKeys=Category",
					{
						headers: {
							"X-Parse-Application-Id": "hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z", // This is the fake app's application id
							"X-Parse-Master-Key": "SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW" // This is the fake app's readonly master key
						}
					}
				);
				const data = await response.json(); // Here you have the data that you need
				const carsOb = data.results;
				console.log(JSON.stringify(carsOb, null, 2));
				setStore({ cars: carsOb });
			},

			loadProduct: async () => {
				const url = process.env.BACKEND_URL + "/api/product";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ product: data }); //variable global
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getUserbyID: position => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
						getActions().saveInSession("name", result[0].name);
						getActions().saveInSession("lastname", result[0].last_name);
						getActions().saveInSession("user_type", result[0].user_type);
						// setStore({ loginName: result.name });
						// setStore({ loginLastName: result.last_name });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			deleteUserbyID: position => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position, requestOptions)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("Error Deleting User", error));
			},
			postRegister: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/register", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ registerStatus: result }))
					.catch(error => console.log("Error registering user.", error));
			},
			postLogin: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
					.then(response => {
						if (response.ok) {
							setStore({ loginResponse: "Login Succesful!" });
							return response.json();
						} else {
							setStore({ loginResponse: "Invalid Credentials!" });
							return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						setStore({ loginToken: result });
						if (getStore().loginResponse == "Login Succesful!") {
							getActions().saveToken(result.token);
							getActions().saveInSession("id", result.idUser);
						}
					})
					.catch(error => console.log("Error trying to login.", error));
			},
			postReset: email => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(email);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/reset", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ resetStatus: result }))
					.catch(error => console.log("Error trying to request a password change.", error));
			},
			registerStore: obj => {
				setStore({ register: obj });
			},
			saveEmail: emailIncoming => {
				sessionStorage.setItem("email", emailIncoming);
				setStore({ email: emailIncoming });
			},
			saveToken: tokenIncoming => {
				sessionStorage.setItem("token", tokenIncoming);
				setStore({ token: tokenIncoming });
			},
			saveInSession: (keyName, value) => {
				sessionStorage.setItem(keyName, value);
			},
			clearSession: () => {
				sessionStorage.removeItem("email");
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("id");
				sessionStorage.removeItem("name");
				sessionStorage.removeItem("lastname");
				sessionStorage.removeItem("user_type");
				sessionStorage.removeItem("carrito");
				setStore({ logoutStatus: "Logged out!" });
			},
			postValidation: data => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/reset/validation", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ resetCode: result }))
					.catch(error => console.log("Error validating code.", error));
			},

			putPassword: data => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/update", requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ passwordResponse: result }))
					.catch(error => console.log("Error updating password.", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: (fav, user_id, quantity) => {
				console.log("objeto", fav);
				console.log("id user", user_id);
				console.log("quantity", quantity);

				const updateArray = getStore().productsByID.filter(favs => favs.product_id == fav.id);

				console.log("Verificando favorito", updateArray.length);
				console.log("updateArray before", updateArray);

				if (updateArray.length > 0) {
					// Updating the store
					const updateStoreArray = getStore().productsByID.map((item, index) => {
						if (item.product_id == fav.id) {
							item.quantity = quantity;
						}
						return item;
					});
					setStore({ productsByID: updateStoreArray });
					console.log("after updating quantity", getStore().productsByID);
					getActions().putQuantity(updateArray[0].id, quantity);
				} else {
					let temp = {
						product_id: fav.id,
						quantity: quantity
					};

					console.log("json a enviar", temp);
					setStore({ favs: getStore().favs.concat(fav) });
					let temp2 = {
						user_id: user_id,
						product_id: fav.id,
						quantity: quantity
					};
					setStore({ productsByID: getStore().productsByID.concat(temp2) });
					//Esta linea lo que hace es agregar el favorito a la base de datos.
					getActions().postListbyID(temp, user_id);
					console.log("favs", getStore().favs);
				}
			},

			deleteFav: fav => {
				console.log("favorito a borrar", fav);
				const deleteArray = getStore().favs.filter(erase => {
					if (erase == fav) {
						console.log("Este es el valor que se elimina", fav);
						setStore({ productToDelete: fav });
					}
					return erase !== fav;
				});
				setStore({ favs: deleteArray });
				console.log("Valores por id", getStore().productsByID);
				const updateCarrito = getStore().productsByID.filter(
					product => product.product_id === getStore().productToDelete.id
				);
				console.log("Valor filtrado a eliminar", updateCarrito);
				getActions().deleteListbyID(updateCarrito[0].id);
				console.log("Mi id a eliminar:", updateCarrito[0].id);
			},
			getListbyID: position => {
				setStore({ productsByID: [] });
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user/" + position + "/carlist")
					.then(response => response.json())
					.then(result => {
						console.log(result);
						getActions().saveInSessionArray("carrito", result);
						let carritoJSON = result;
						console.log("Lo que cargue de carrito", carritoJSON);
						if (carritoJSON != null)
							return carritoJSON.map((item, index) => {
								setStore({ productsByID: getStore().productsByID.concat(item) });
								getActions().getProductbyID(item.product_id);
								console.log("Esto es lo que tengo", item);
								console.log("Mi product id", item.product_id);
							});
					})
					.catch(error => console.log("Error loading list.", error));
			},
			// Este metodo lo que hace es agregar a la base de datos el producto al carrito por usuario
			postListbyID: (newData, position) => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/user/" + position + "/carlist", requestOptions)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							// setStore({ loginResponse: "Item added!" });
							// return response.json();
						} else {
							// setStore({ loginResponse: "It was not possible to add the item." });
							// return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						console.log("Item added!", result);
					})
					.catch(error => console.log("Error saving item.", error));
			},
			deleteListbyID: position => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "DELETE",
					headers: myHeaders
				};
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/carlist/" + position, requestOptions)
					.then(resp => resp.json())
					.then(result => {
						console.log(result);
					})
					.catch(error => console.log("Error trying to delete from the list.", error));
			},
			saveInSessionArray: (keyName, value) => {
				let myJSONText = JSON.stringify(value); // Convierte de JSON a texto.
				sessionStorage.setItem(keyName, myJSONText);
			},
			getFromSessionArray: keyName => {
				let productText = sessionStorage.getItem(keyName);
				let productJSON = JSON.parse(productText); // Convierte de texto a JSON.
				return productJSON;
			},
			postProduct: newData => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(newData);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				fetch(process.env.BACKEND_URL + "/api/product", requestOptions)
					.then(response => {
						console.log(response.json());
						if (response.ok) {
							// setStore({ loginResponse: "Item added!" });
							// return response.json();
						} else {
							// setStore({ loginResponse: "It was not possible to add the item." });
							// return response.json();
						}
					})
					// .then(result => console.log(result))
					.then(result => {
						console.log("Product added!", result);
					})
					.catch(error => console.log("Error saving product.", error));
			},
			// Recarga los favoritos desde la base de datos.
			reloadCar: id => {
				getStore().favs = [];
				console.log("Me borró favs", getStore().favs);
				getActions().getListbyID(id);
				// let carritoJSON = getActions().getFromSessionArray("carrito");
				// console.log("Lo que cargue de carrito", carritoJSON);
				// if (carritoJSON != null)
				// 	return carritoJSON.map((item, index) => {
				// 		getActions().getProductbyID(item.product_id);
				// 		console.log("Esto es lo que tengo", item);
				// 		console.log("Mi product id", item.product_id);
				// 	});
			},
			// Este metodo adquiere la info de un producto.
			getProductbyID: position => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/product/" + position)
					.then(response => response.json())
					.then(result => {
						console.log("lo que voy a añadir", result);
						setStore({ favs: getStore().favs.concat(result) });
					})
					.catch(error => console.log("Error loading product.", error));
			},
			// List ID es el ID de la base de datos de wish list
			putQuantity: (list_id, quantity) => {
				// var myHeaders = new Headers();
				// myHeaders.append("Content-Type", "application/json");
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				let data = { quantity: quantity };
				var raw = JSON.stringify(data);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/api/updatefav/" + list_id, requestOptions)
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ passwordResponse: result }))
					.catch(error => console.log("Error updating password.", error));
			}
		}
	};
};

export default getState;
