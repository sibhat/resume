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
			<section class="section-e" id="contact">
				<div class="section__header">
					<h1 class="heading__primary">contact</h1>
				</div>
				<div class="content">
					<a
						href="#"
						class="contact__link block u-margin-bottom-medium"
						target="_blank"
					>
						sibhat.temelso@gmail.com
					</a>
					<a
						href="https://github.com/sibhat"
						class="contact__link block u-margin-bottom-medium"
						target="_blank"
					>
						github.com/sibhat
					</a>
					<a
						href="https://www.linkedin.com/in/sibhat007"
						class="contact__link block"
						target="_blank"
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
