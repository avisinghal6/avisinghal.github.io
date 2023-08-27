import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import "../styles/education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../components/common/downloadButton";

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<div>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
				<div className="content-wrapper">
					<div className="education-logo-container">
						<div className="education-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="education-main-container">
						<div className="education-title">
							<div className="education-title-text">
								{INFO.education.title}
							</div>
							<div className="education-download-button">
								<DownloadButton target="_blank" />
							</div>
						</div>

						<div className="subtitle education-subtitle">
							{INFO.education.description}
						</div>

						<div className="education-container">
							<div className="education-wrapper">
								<div className="education-card">
									<div className="education-card-container">
										<div className="education-card-header">
											<div className="education-card-icon">
												<FontAwesomeIcon
													icon={faUserGraduate}
												/>
											</div>
											<div className="education-card-title">
												Education
											</div>
										</div>
										<hr className="hr"></hr>
										<div className="education-card-body">
											<div className="education-card-text">
												<div className="education-card-body-inner">
													<div className="education">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/rice-logo.png"
															}
															alt="smith"
															className="university-image"
														/>
														<div className="education-card-title">
															Rice University
														</div>
														<div className="education-card-subtitle">
															Masters in Computer
															Science
														</div>
														<div className="education-card-duration">
															Aug 2022 - Dec 2023
														</div>
													</div>
													<div className="education-card-details">
														<ul className="education-card-details-list">
															<li>
																<strong className="education-card-color">
																	Coursework: 
																</strong>
																&nbsp; 
															</li>
															{INFO.education.coursework1}
														</ul>
													</div>

													<div className="education">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/deltech.jpeg"
															}
															alt="uhg"
															className="university-image"
														/>
														<div className="education-card-title">
															Delhi Technological University
															University
														</div>
														<div className="education-card-subtitle">
															Bachelors in
															Electronics and Communication
														</div>
														<div className="education-card-duration">
															Aug 2017 - June 2021
														</div>
													</div>

													<div className="education-card-details">
														<ul className="education-card-details-list">
															<li>
																<strong className="education-card-color">
																	Coursework
																</strong>
                                                                &nbsp;
															</li>
                                                            {INFO.education.coursework2}
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="page-footer">
						<Footer />
				</div>
			</div>
		</div>
	);
};

export default Education;