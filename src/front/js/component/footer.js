import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-2 text-center bg-dark">
		<button
			onClick={() => window.open("https://www.instagram.com")}
			id="myButtonInstagram"
			className="btn request-callback">
			{" "}
			<i className="fab fa-instagram fa-2x pr-2" />{" "}
		</button>

		<button
			onClick={() => window.open("https://www.facebook.com")}
			id="myButtonFacebook"
			className="btn request-callback">
			{" "}
			<i className="fab fa-facebook fa-2x pr-2" />
		</button>

		<button
			onClick={() => window.open("https://www.twitter.com")}
			id="myButtonTwitter"
			className="btn request-callback">
			{" "}
			<i className="fab fa-twitter fa-2x pr-2" />
		</button>

		<i className="fas fa-envelope fa-2x " />
	</footer>
);
