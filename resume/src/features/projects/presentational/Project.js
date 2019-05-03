import React from "react";

const Project = props => {
	let cards = props.projects.map((project, index) => (
		<div className="card" key={index}>
			<div className="card__photo">
				<img src={project.images[0]} alt="seekgeek" />
			</div>
			<div className="card__body">
				<div className="card__body--header">
					<p>
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							{project.title}
						</a>
					</p>
				</div>
				<div className="card__body--info">
					<p className="paragaph">{project.headline}</p>
				</div>
				<ul className="card__list">
					Stack:
					{/*{project.stack.map((item, index) => (*/}
						<li >{project.stack.join(", ")} </li>
					{/*))}*/}
				</ul>
			</div>
		</div>
	));
	return (
		<section className="section-c" id="projects">
			<div className="section__header">
				<h1 className="heading__primary">projects</h1>
			</div>
			<div className="projects">{cards}</div>
		</section>
	);
};

export default Project;
