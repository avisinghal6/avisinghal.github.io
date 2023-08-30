import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "../styles/experience.css";

const Publications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "publications");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Publications | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="publications" />
        <div className="content-wrapper">
          <div className="resume-logo-container">
            <div className="resume-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="resume-main-container">
            <div className="resume-title">
              <div className="resume-title-text">{INFO.publications.title}</div>
            </div>

            <div className="subtitle resume-subtitle">
              {INFO.publications.description}
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
                              src={process.env.PUBLIC_URL + "/images/ieee.png"}
                              alt="ieee"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Optimal Tuning using Global Neighborhood Algorithm
                              for Cruise Control System
                            </div>
                          </div>
                          <div className="resume-work-container">
                            <div className="resume-publication">
                              Published:{" "}
                              <a href="https://ieeexplore.ieee.org/document/9441983/authors#authors">
                                IEEE Explore
                              </a>
                            </div>
                            <div className="resume-date">
                              Aug 2020 - May 2021
                            </div>
                          </div>

                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Matlab, AI, ML
                          </div>
                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                                Cruise control aims to reduce driver’s efforts
                                and provide a constant speed set by the driver.
                                The proliferation of cruise control depends on
                                the effectiveness of the feedback control. In
                                this paper, a metaheuristic algorithm called
                                Global Neighborhood Algorithm (GNA) is used for
                                appropriately choosing the parameters of a PID
                                controller with filter coefficient N i (PID-N).
                                The performance of PID, PID-N using GNA has been
                                compared with the previous works (fuzzy logic,
                                state space, genetic algorithm, particle swarm
                                optimization algorithm). The results obtained
                                after performing the simulation showed that the
                                proposed PID-N controller using GNA gives better
                                results in all aspects (rise time, settling
                                time, peak overshoot and peak time). All the
                                simulations were done in MATLAB/Simulink.
                              </li>
                            </ul>
                          </div>

                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/springer.png"
                              }
                              alt="springer"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Comparative Analysis for Optimal Tuning of DC
                              Motor Position Control System
                            </div>
                          </div>
                          <div className="resume-work-container">
                            <div className="resume-publication">
                              Published:{" "}
                              <a href="https://link.springer.com/chapter/10.1007/978-981-16-3346-1_60 ">
                                Springer
                              </a>
                            </div>
                            <div className="resume-date">
                              Aug 2020 - May 2021
                            </div>
                          </div>
                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Matlab, AI, ML
                          </div>

                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                                DC motors are an important component and are
                                used in industrial machines and engineering
                                applications. The position control of DC motor
                                is useful in precision control systems. This
                                study aims to present a comparative analysis of
                                different controllers and to tune these
                                controllers using metaheuristic algorithms for
                                DC motor position control. The position control
                                is modeled using its transfer function. In this
                                study, the performance of PID, fractional-PID
                                (F-PID) and PID with filter coefficient Ni
                                (PID-N) has been compared. The controller’s
                                parameters, i.e., Kp, Ki, Kd, Ni, μ, λ have been
                                tuned by using global neighborhood algorithm
                                (GNA) and bat algorithm (BA). The optimization
                                performance of the chosen algorithms is compared
                                using transient response analysis. The results
                                obtained after performing the simulation show
                                that the overall performance of PID-N controller
                                is better compared to the other controllers, and
                                GNA does better overall tuning of controller
                                parameters compared to BA. All simulations were
                                done using MATLAB/Simulink.
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

export default Publications;
