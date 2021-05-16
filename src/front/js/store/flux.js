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
			product: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
					.catch(error => console.log("error", error));
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
					.then(response => response.json())
					// .then(result => console.log(result))
					.then(result => setStore({ loginResponse: result }))
					.catch(error => console.log("error", error));
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
					.catch(error => console.log("error", error));
			},
			registerStore: obj => {
				setStore({ register: obj });
			},
			saveEmail: emailIncoming => {
				sessionStorage.setItem("email", emailIncoming);
				setStore({ email: emailIncoming });
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
					.catch(error => console.log("error", error));
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
					.catch(error => console.log("error", error));
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
			}
		}
	};
};

export default getState;
