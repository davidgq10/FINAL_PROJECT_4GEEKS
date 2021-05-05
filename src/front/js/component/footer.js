import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-info">
		<button
			onClick={() => window.open("https://www.instagram.com")}
			id="myButtonInstagram"
			className="btn request-callback">
			{" "}
			<i className="fab fa-instagram fa-3x pr-2" />{" "}
		</button>

		<button
			onClick={() => window.open("https://www.facebook.com")}
			id="myButtonFacebook"
			className="btn request-callback">
			{" "}
			<i className="fab fa-facebook fa-3x pr-2" />
		</button>

		<button
			onClick={() => window.open("https://www.twitter.com")}
			id="myButtonTwitter"
			className="btn request-callback">
			{" "}
			<i className="fab fa-twitter fa-3x pr-2" />
		</button>

		<i className="fas fa-phone-alt fa-3x pr-1" />
		<i className="fas fa-envelope fa-3x " />
	</footer>
);
