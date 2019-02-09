import React from "react";

const Project = props => {
	let cards = props.projects.map(project => (
		<div className="card" key={project.title}>
			<div className="card__photo">
				<img src={project.img1} alt="seekgeek" />
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
					<p className="paragaph">{project.description}</p>
				</div>
			</div>
		</div>
	));
	return (
		<section className="section-c" id="projects">
			<div className="section__header">
				<h1 className="heading__primary">projects</h1>
			</div>
			<div className="projects">{cards}</div>
			<input
				type="file"
				name="file"
				onChange={props.uploadfileHandelr}
				style={{ margin: "100px" }}
			/>
			<input
				type="submit"
				style={{ margin: "100px" }}
				value="Submit"
				onClick={props.uploadFile}
			/>
		</section>
	);
};

export default Project;
