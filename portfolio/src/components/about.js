import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";
import Socials from "./socials";
import Skills from "./skills";

import INFO from "../data/user";
import SEO from "../data/seo";

import "../styles/pages/about/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<div>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>

                        <div className="about-right-side">
								<div className="about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
                                    <br></br>
                                    <br></br>
                                    {INFO.about.description2}
                                    <br></br>
                                    <br></br>
                                    {INFO.about.description3}
								</div>
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="about-first-area-right-side">
									<div className="about-works">
                                        <Skills />
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>

							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;