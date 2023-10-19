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
                                Achieved high accuracy <strong>~85%</strong>,
                                low quantization (uint8) loss{" "}
                                <strong>(0.5%)</strong>, low latency{" "}
                                <strong>(&lt; 5K MAC operations)</strong>, small
                                model size <strong>(&lt; 350KB)</strong> by
                                building neural architecture search (NAS) and
                                post training quantization framework for
                                <strong>resource constrained</strong> devices for computer
                                vision. 
                                <li>
                                    Improved accuracy by{" "}
                                <strong>~3% </strong>to reach{" "}
                                <strong>~88% </strong> accuracy for CIFAR10 on
                                edge devices using joint optimization of NAS and
                                Hyperparameter optimization (HPO) inspired by
                                CVPR 23’s{" "}
                                <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Wang_Multi-Agent_Automated_Machine_Learning_CVPR_2023_paper.pdf">
                                  MA2ML
                                </a>{" "}
                                using RL.
                                </li>
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
                                Currently building framework to support quantization and
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
                                Reviewed large C++ code base, crafted scalable
                                and efficient test program for production
                                release. Resolved <strong>50+</strong> bugs, incorporated
                                <strong>20+</strong> features for{" "}
                                <strong>enhanced debugging</strong> in the 
                                verification tool crafted at TI, <strong> recognized </strong> as top user.
                              </li>
                              <li>
                                Constructed a parasitic extraction tool with user
                                interface with python scripts. The tool
                                <strong>reduced</strong> test hardware redesign{" "}
                                <strong>time, cost </strong>
                                by <strong>30%</strong> and better output correlation.
                                Work published at TI conference.
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
