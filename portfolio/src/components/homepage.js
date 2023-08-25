import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import {
  faMailBulk,
  faCode,
  faHashtag,
  faHammer,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Logo from "./common/logo";
import Footer from "./common/footer";
import NavBar from "./common/navbar";

import INFO from "../data/user";
import SEO from "../data/seo";

import "../styles/pages/homepage/homepage.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(100);
  const [oldLogoSize, setOldLogoSize] = useState(100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <div>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-name">Avi Singhal</div>

          <div className="homepage-image-container">
            <div className="homepage-image-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/images/avi.png"}
                alt="Avi Singhal"
              />
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="homepage-intro">
            Hi, I am <span className="homepage-first-letter">A</span>daptive{" "}
            <span className="homepage-first-letter">V</span>ersatile{" "}
            <span className="homepage-first-letter">I</span>nnovator.{" "}
            {INFO.homepage.detail}
			<br></br>
			<br></br>
			{INFO.homepage.detail2}
          </div>

          <div className="homepage-socials">
            <div className="socials-header">
              <FontAwesomeIcon
                icon={faHashtag}
                className="homepage-social-icon-main"
              />
              <span className="homepage-social-text-main">Connect With Me</span>
            </div>
            <hr></hr>
			<div className="socials-icons">
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.leetcode}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faCode}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
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

export default Homepage;
