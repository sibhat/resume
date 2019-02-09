const firebase = require("firebase");

const about = {
	description:
		"Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a software engineer. I am ambitious, adventurous, animated team player. I also do freelance wedding, event and portrait photography in my free time. As a result, I have a professional background in working with client needs and creating those memorable times",
	slogen: "I want to make things that make a difference.",
	mission:
		"Mission-driven full stack developer with a passion for thoughtful UI design"
};
const experience = {
	projectManager: {
		title: "Project Manager",
		companyName: "Lambda Academy of Computer Science",
		skills: [
			" Oversee student project groups in a project manager capacity to ensure projects remain on track Track and report on progress towards milestones.",
			" Follow and actively work to improve Lambda Labs software development practices.",
			" Connect students with relevant resources to complete their projects.",
			" Maintain Labs enterprise accounts, granting access as needed and migrating student projects as appropriate.",
			"Instill relevant career readiness knowledge, skills, and attitudes into student groups ",
			"Schedule and coordinate capstone defenses"
		],
		start_date: "Dec 2018",
		end_date: " Present",
		location: "Portland, OR"
	},
	softwareEngineer: {
		title: "Software Engineer",
		companyName: "Lambda Academy of Computer Science",
		description:
			"A 6+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, software engineering, and web development.",
		skills: [
			"Approached all coding challenges using pair programming",
			" Utilized agile software development and Git workflow on all projects",
			"Hands-on experience with a client."
		],
		start_date: "March/2018",
		end_date: "Dec/2018",
		location: "Portland, OR"
	},
	photography: {
		title: "Freelance Photography",
		companyName: "Zanta Photography",

		skills: [
			"Provide photography services to clients for individual, family, and graduation portraits.",
			"Set up equipment at the venue and capture moments at class reunions, weddings, parties,etc. Digitally photograph events.",
			"Edit and manipulate photos for clients’ desired end product.",
			"Provide graphic art services for bulletins and flyers for local church organizations and music concerts."
		],
		start_date: "Jun 2014",
		end_date: "Present",
		location: "Portland, OR"
	}
};

function write() {
	var config = {
		apiKey: "AIzaSyCFT05v14dKf5Jr9yWr_2E1RTZZjWXMBJo",
		authDomain: "sibhat-resume.firebaseapp.com",
		databaseURL: "https://sibhat-resume.firebaseio.com",
		projectId: "sibhat-resume",
		storageBucket: "sibhat-resume.appspot.com",
		messagingSenderId: "1092295778353"
	};
	firebase.initializeApp(config);
	const project = createProject(firebase);

	// firebase
	// 	.database()
	// 	.ref("/about")
	// 	.set(about);
	// firebase
	// 	.database()
	// 	.ref("/experience")
	// 	.set(experience);

	firebase
		.database()
		.ref("/project")
		.set(project);
	return 0;
}

write();
