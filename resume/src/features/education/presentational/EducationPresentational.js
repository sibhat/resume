import React from "react";

const EducationPresentational = props => {
	console.log("education", props);
	let pages = props.education.map((school, index) => (
		<div className="page" key={index}>
			<div className="page__header">
				<div className="page__header--logo">&nbsp;</div>
				<div className="page__header--name">
					<h2 className="heading__secondary teal-text">
						{school.degree}
					</h2>
				</div>
				<h4 className="heading__teritary">{school.name}</h4>
			</div>
			<div className="page__body">
				<p>{school.description}</p>
			</div>
			<div className="page__body">
				<ul className="page__list">
					{school.skills.map((item, index) => (
						<li key={index}>{item} </li>
					))}
				</ul>
			</div>
			<div className="page__footer">
				<p className="page__footer--text">
					{school.startDate}  =>  {school.endDate} | {school.location}
				</p>
			</div>
		</div>
	));
	return (
		<section className="section-b" id="education">
			<div className="section__header">
				<h1 className="heading__primary">Education</h1>
			</div>
			<div className="content">{pages}</div>
		</section>
	);
};

export default EducationPresentational;
