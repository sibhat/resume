import React from "react";
const Header = props => (
	<React.Fragment>
		<header className="iheader teal-text">
			<div className="center">
				<div className="iheader__img">
					<img className="logo" src={props.logoImg} alt={""} />
				</div>
				<div className="iheader__text">
					<h1 className="heading__primary">
						I want to
						<span className="teal"> develop a website </span>
						<br />
						<span className="underline" />
					</h1>

					<a href="#contact" className="btn btn--primary teal">
						Have an awesome Idea?
					</a>
				</div>
				<span className="iheader--link">
					<a href="#about" className="svg-down">
						Learn more about what I do
					</a>
					<img
						className="svg-down"
						src="../../../img/arrow.svg"
						alt={""}
					/>
				</span>
			</div>
		</header>
		<section className="section-a" id="about">
			<div className="section__header">
				<h1 className="heading__primary">About</h1>
			</div>
			<div className="section-a__title">
				<p className="title u-margin-bottom-small">{props.mission}</p>

				<p className="paragaph">{props.description}</p>
				<p className="slogen">{props.slogen} </p>
			</div>
		</section>
	</React.Fragment>
);

export default Header;
