import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a Support Engineer at
        <a href="https://www.mach7t.com">
          {" "}
          Mach7 Technologies
        </a>
        . I'm currently working on a variety of personal projects, which can be found under Projects.{" "}
        <a href="https://www.aboutamazon.com/"></a>{" "}
        <b></b> 
        <b> </b><b></b>{" "}
        <a href="https://www.ox.ac.uk/about"></a>
      </p>
    );
    const two = (
      <p>
        Aside from my professional life, I enjoy skiing and hiking whenever I can.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Send me a message at{" "}
        <a href="mailto:brendanmckenney@gmail.com">
          brendanmckenney@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
