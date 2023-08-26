import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGear,
	faLaptopCode,
	faDatabase,
	faServer,
	faCodeCompare,
	faFileCode,
} from "@fortawesome/free-solid-svg-icons";

import Card from "./common/card";

import "../styles/skills.css"; // Make sure to create the styles/skills.css file with your desired styles

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faGear}
				title="Skills"
				body={
					<div className="skills-body">
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faLaptopCode}
									className="skill-icon"
								/>
							</div>

							{/* <div class="vl"></div> */}
							<div className="skill-name">
								Java, Javascript/Typescript, Python, C++, PHP,
								Solidity
							</div>
						</div>
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faServer}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">
								Spring Boot, Node.js, Laravel, Kafka, Redis
							</div>
						</div>
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faFileCode}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">
								React, Angular, Redux
							</div>
						</div>
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faCodeCompare}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">
								AWS, Kubernetes, Jenkins, Git, JUnit, PHP
								Artisan, Drools
							</div>
						</div>
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faDatabase}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">SQL, MongoDB</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;