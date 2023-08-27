import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "../styles/experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../components/common/downloadButton";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "experience");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Experience | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="experience" />
        <div className="content-wrapper">
          <div className="resume-logo-container">
            <div className="resume-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="resume-main-container">
            <div className="resume-title">
              <div className="resume-title-text">{INFO.experience.title}</div>
              <div className="resume-download-button">
                <DownloadButton target="_blank" />
              </div>
            </div>

            <div className="subtitle resume-subtitle">
              {INFO.experience.description}
            </div>

            <div className="resume-container">
              <div className="resume-wrapper">
                <div className="resume-card">
                  <div className="resume-card-container">
                    <div className="resume-card-header">
                      <div className="resume-card-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <div className="resume-card-title">Work</div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="resume-card-body">
                      <div className="resume-card-text">
                        <div className="resume-works-body">
                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/tetramem-logo.png"
                              }
                              alt="Tetramem"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Tetramem Inc.
                            </div>
                            <div className="resume-work-subtitle">
                              Software/ML Engineer Intern
                            </div>
                            <div className="resume-work-duration">
                              May 2023 - Dec 2023
                            </div>
                          </div>
                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Python, C++, Pytorch,
                            Keras/Tensorflow, Hugging Face, ONNX, AWS, Docker,
                            Microsoft NNI, Jupyter notebooks, Linux, Git
                          </div>
                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                                Developed a neural architecture search (NAS) and
                                post-training quantization framework for
                                production release. Achieved{" "}
                                <strong>~0.5%</strong> quantization loss &{" "}
                                <strong>88%</strong> accuracy on TinyML models
                                using diverse search spaces for{" "}
                                <strong>mobile devices</strong> for CIFAR10 and
                                other applications. Implemented one-shot,
                                multi-trial NAS for edge devices, developed
                                optimized ONNX graphs and introduced
                                <strong>joint optimization</strong> of NAS and
                                Hyperparameter optimization(HPO) using RL
                                inspired by CVPR 23’s{" "}
                                <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Wang_Multi-Agent_Automated_Machine_Learning_CVPR_2023_paper.pdf">
                                  MA2ML
                                </a>
                              </li>
                              <li>
                                Model development, research and implementation
                                spanning computer vision, AI ISP and audio
                                applications for edge devices.
                              </li>
                              <li>
                                Added support for <strong>5+</strong> intricate
                                ONNX operators with unit tests and simulation of
                                noise to ML compiler to enhance model inference
                                on AI accelerator and improve accuracy by at
                                least
                                <strong>~3%</strong>.
                              </li>
                              <li>
                                Building framework to support quantization and
                                inference of transformer-based Models for edge
                                devices starting with quantized{" "}
                                <a href="https://arxiv.org/pdf/2206.01191.pdf">
                                  EfficientFormer
                                </a>
                                , paving the path for LLM support on Tetramem AI
                                accelerator.
                              </li>
                            </ul>
                          </div>

                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/ti-logo.png"
                              }
                              alt="uhg"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Texas Instruments
                            </div>
                            <div className="resume-work-subtitle">
                              Test Engineer
                            </div>
                            <div className="resume-work-duration">
                              July 2021 - July 2022
                            </div>
                          </div>
                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Python, C++, git
                          </div>

                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                                Reviewed large C++ code base, designed scalable
                                and efficient test program for production
                                release. Resolved bugs, incorporated
                                <strong>20+</strong> features for{" "}
                                <strong>enhanced debugging</strong> to
                                verification tool developed at TI, resulting in
                                recognition as best user.
                              </li>
                              <li>
                                Developed a parasitic extraction tool with user
                                interface using python scripts. The tool helped{" "}
                                <strong>reduce</strong> test hardware redesign{" "}
                                <strong>time, cost </strong> 
                                by <strong>30%</strong> and better correlation
                                of simulation output with tester results. Work
                                published at TI conference.
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

export default Experience;
