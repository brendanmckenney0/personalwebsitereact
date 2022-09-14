import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, I'm "}
            <span className="intro-name">{"Brendan."}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle"></div>
          <div className="intro-desc">
            I'm an IT professional based in Burlington, VT. I'm interested in creating products that utilize emerging technologies. I'm currently working as a Support Engineer supporting products and engineering solutions for customers across the globe.
          </div>
          <a
            href="mailto:brendanmckenney@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Get in touch"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
