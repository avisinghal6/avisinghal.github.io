import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGear,
	faLaptopCode,
	faDatabase,
	faServer,
	faCodeCompare,
	faFileCode,
    faBrain
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
								Python, Java, C++, Javascript, HTML, CSS, MATLAB
							</div>
						</div>
                        <div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faBrain}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">
								ML,DL, NLP, computer vision, CNN, RNN, LSTM, RL, GNN
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
								React.js, Node.js, Redis, Express.js, Pytorch, Tensorflow, ONNX
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
								AWS, Git
							</div>
						</div>
						<div className="skill">
							<div className="icon-container">
								<FontAwesomeIcon
									icon={faDatabase}
									className="skill-icon"
								/>
							</div>
							<div className="skill-name">SQL, MongoDB,Firebase </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;