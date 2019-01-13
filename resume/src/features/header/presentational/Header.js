import React from "react";
const Header = () => (
	<React.Fragment>
		<header class="iheader teal-text">
			<div class="center">
				<div class="iheader__img">
					<img class="logo" src="img/logo.svg" />
				</div>
				<div class="iheader__text">
					<h1 class="heading__primary">
						I want to
						<span class="teal"> develop a website </span>
						<br />
						<span class="underline">
							<span
								class="typer"
								id="main"
								data-words="with optimum performance, that make a difference, and are also challenging"
								data-colors="teal"
								data-delay="100"
								data-deleteDelay="5000"
							/>
							<span
								class="cursor"
								data-colors="blue"
								data-owner="main"
							/>
						</span>
					</h1>

					<a href="#contact" class="btn btn--primary teal">
						Have an awesome Idea?
					</a>
				</div>
				<span class="iheader--link">
					<a href="#about" class="svg-down">
						Learn more about what I do
					</a>
					<img
						class="svg-down"
						src="../../"
						onerror="this.onerror=null; this.src='image.png'"
					/>
				</span>
			</div>
		</header>
		<section class="section-a" id="about">
			<div class="section__header">
				<h1 class="heading__primary">About</h1>
			</div>
			<div class="section-a__title">
				<p class="title u-margin-bottom-small">
					Mission-driven full stack developer with a passion for
					thoughtful UI design.
				</p>

				<p class="paragaph">
					Innovative optimized solution seeker. Excited to be at the
					deployment phase of my new career as a software engineer. I
					am ambitious, adventurous, animated team player. I also do
					freelance wedding, event and portrait photography in my free
					time. As a result, I have a professional background in
					working with client needs and creating those memorable
					times.
				</p>
				<p class="slogen">
					I want to make things that make a difference.
				</p>
			</div>
		</section>
	</React.Fragment>
);

export default Header;
