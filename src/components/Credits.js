import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

class Credits extends React.Component {
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
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>I'm open to work and actively applying. You can view my resume <a href="https://drive.google.com/file/d/1zjexOJHmbGWdOZEtdrmeEgV0FyyZcm29/view?usp=sharing"> {" "} here. </a></div>
            <div>Built by Brendan McKenney. <a href="https://github.com/gazijarin/Gazi"> {" "} Inspired by this. </a> </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Credits;
