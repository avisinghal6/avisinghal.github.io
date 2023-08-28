import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "../styles/experience.css";

const OpenSource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "opensource");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Open Source | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="opensource" />
        <div className="content-wrapper">
          <div className="resume-logo-container">
            <div className="resume-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="resume-main-container">
            <div className="resume-title">
              <div className="resume-title-text">{INFO.opensource.title}</div>
            </div>

            <div className="subtitle resume-subtitle">
              {INFO.opensource.description}
            </div>

            <div className="resume-container">
              <div className="resume-wrapper">
                <div className="resume-card">
                  <div className="resume-card-container">
                    <div className="resume-card-body">
                      <div className="resume-card-text">
                        <div className="resume-works-body">
                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/os.jpeg"
                              }
                              alt="ieee"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Commits
                            </div>
                          </div>
                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                                HuggingFace/Accelerate <a href="https://github.com/avisinghal6/accelerate/commits?author=avisinghal6">Commits</a>
                              </li>
                              <li>
                                HuggingFace/Transformers <a href="https://github.com/huggingface/transformers/pull/21377/commits">Commits</a>
                              </li>
                              <li>
                                Microsoft NNI <a href="https://github.com/avisinghal6/NNI/commits?author=avisinghal6">Commits</a>
                              </li>
                              <li>
                                ONNX <a href="https://github.com/avisinghal6/onnx/commits?author=avisinghal6">Commits</a>
                              </li>
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
    </React.Fragment>
  );
};

export default OpenSource;
