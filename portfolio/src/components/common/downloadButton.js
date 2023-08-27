import React from "react";

import "../../styles/downloadbutton.css";

const DownloadButton = ({ target }) => {
	const handleClick = () => {
		window.open(process.env.PUBLIC_URL + "/resume.pdf", target);
	};

	return (
		<button onClick={handleClick} className="download-button">
			Show Resume
		</button>
	);
};

export default DownloadButton;