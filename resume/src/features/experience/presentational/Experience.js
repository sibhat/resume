import React from "react";

const Experience = props => {
	let pages = props.experiences.map(job => (
		<div className="page" key={job.title}>
			<div className="page__header">
				<div className="page__header--logo">&nbsp;</div>
				<div className="page__header--name">
					<h2 className="heading__secondary teal-text">
						{job.title}
					</h2>
				</div>
				<h4 className="heading__teritary">{job.companyName}</h4>
			</div>
			<div className="page__body">
				<ul className="page__list">
					{job.skills.map(item => (
						<li key={item}>{item} </li>
					))}
				</ul>
			</div>
			<div className="page__footer">
				<p className="page__footer--text">
					{job.start_date} {job.end_date} | {job.location}
				</p>
			</div>
		</div>
	));
	return (
		<section className="section-b" id="experience">
			<div className="section__header">
				<h1 className="heading__primary">Experience</h1>
			</div>
			<div className="content">{pages}</div>
		</section>
	);
};

export default Experience;
