import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "No Man's Land": {
        title: "no man's land",
        desc:
          "A third-person survival-mode game where you battle against time and space to return to Earth.",
        techStack: "C# (UNITY)",
        link: "https://github.com/slakh96/no-mans-land",
        open: "https://gazijarin.itch.io/no-mans-land",
        image: "/assets/nomansland.png"
      }, 
      Truth: {
        title: "truth",
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/gazijarin/truth",
        open: "https://gazijarin.github.io/Truth/",
        image: "/assets/truth.png"
      },
      "Tall Tales": {
        title: "tall tales",
        desc:
          "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
        link: "https://github.com/gazijarin/TallTales",
        open: "https://talltales.herokuapp.com/",
        image: "/assets/talltales.png"
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with clear and succinct data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/gazijarin/Portfolio.js",
        open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/portfolio.png"
      }
    };
    const projects = {
      "Incident Response Toolkit": {
        desc:
          "A toolkit to analyze system information on a windows system prior to a suspected security incident.",
        techStack: "Powershell",
        link: "https://github.com/brendanmckenney0/IncidentResponseToolkit",
      },
      "A-W-S": {
        desc:
          "A web scraper utility that gathers html using a URL.",
        techStack: "Python",
        link: "https://github.com/brendanmckenney0/A-W-S/blob/main/main.py",
      },
      "URL Shortener": {
        desc:
          "A URL shortening program that utlizies the bit.ly api to shorten links.",
        techStack: "Python",
        link:
          "https://github.com/brendanmckenney0/UShorten"
      },
      "Password Saver": {
        desc:
          "A Password Manager written in Python which encrypts passwords with a caesar cypher.",
        techStack: "Python",
        link: "https://github.com/brendanmckenney0/Password-Saver/",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Projects</span>
        </div>
      
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div> 
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li> 
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
