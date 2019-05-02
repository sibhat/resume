import React from "react";

const SkillPresentational = props => {
    console.log("skills: ", props);
    return (
        <section className="section-d" id="skills">
            <div className="section__header">
                <h1 className="heading__primary">Skills</h1>
            </div>
            <div className="content">
                <div className="skill">
                    <div className="skill__header">
                        <h2 className="heading__secondary teal-text">
                            Front-End
                        </h2>
                    </div>
                    <div className="skill__body" >
                        {
                            !props.isLoading &&
                            props.skills.map((skill, index) => (

                                    <div className="skill__item" key={index}>
                                        <img
                                            src={skill[1]}
                                            alt={`${skill[0]} logo`}
                                            className="skill__logo"
                                        />
                                        <h3 className="skill__name">{skill[0]}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>

                </div>
                <div className="skill">
                    <div className="skill__header">
                        <h2 className="heading__secondary teal-text">
                            Back-End
                        </h2>
                    </div>
                    <div className="skill__body" >
                        {
                            !props.isLoading &&
                            props.skills.map((skill, index) => (

                                    <div className="skill__item" key={index}>
                                        <img
                                            src={skill[1]}
                                            alt={`${skill[0]} logo`}
                                            className="skill__logo"
                                        />
                                        <h3 className="skill__name">{skill[0]}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="skill">
                    <div className="skill__header">
                        <h2 className="heading__secondary teal-text">
                            other
                        </h2>
                    </div>
                    <div className="skill__body" >
                        {
                            !props.isLoading &&
                            props.skills.map((skill, index) => (

                                    <div className="skill__item" key={index}>
                                        <img
                                            src={skill[1]}
                                            alt={`${skill[0]} logo`}
                                            className="skill__logo"
                                        />
                                        <h3 className="skill__name">{skill[0]}</h3>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SkillPresentational;