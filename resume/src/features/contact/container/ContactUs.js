import React, { Component } from "react";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	submitHandler = e => {
		e.preventDefault();
		const msg = {
			to: "sibhat.temelso@gmail.com",
			from: "test@example.com",
			subject: "Sending with SendGrid is Fun",
			text: "and easy to do anywhere, even with Node.js",
			html: "<strong>and easy to do anywhere, even with Node.js</strong>"
		};
		sgMail.send(msg);
	};
	render() {
		return (
			<section className="section-e" id="contact">
				<div className="section__header">
					<h1 className="heading__primary">contact</h1>
				</div>
				<div className="content">
					<a
						href="#/"
						className="contact__link block u-margin-bottom-medium"
						target="_blank"
						rel="noopener noreferrer"
					>
						sibhat.temelso@gmail.com
					</a>
					<a
						href="https://github.com/sibhat"
						className="contact__link block u-margin-bottom-medium"
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/sibhat
					</a>
					<a
						href="https://www.linkedin.com/in/sibhat007"
						className="contact__link block"
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin.com/in/sibhat007
					</a>
				</div>
				<button className="btn" onClick={this.submitHandler} />
				<button className="btn" onClick={this.submitHandler}>
					Email
				</button>
			</section>
		);
	}
}

export default ContactUs;
