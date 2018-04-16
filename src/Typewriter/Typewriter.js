import React, { Component } from "react";
import Typist from "react-typist";
import "./Typist.css";

export default class Typewriter extends React.Component {
  render() {
    const turnt =
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/23/15/enhanced/webdr12/anigif_enhanced-14300-1445627471-3.gif";
    return (
      <Typist
        className="Typist-header"
        avgTypingSpeed={40}
        startDelay={1200}
        onTypingDone={this.onHeaderTyped}
        cursor={{ hideWhenDone: true }}
      >
        Search.
        <Typist.Backspace count={8} delay={1000} />
        Chat.
        <Typist.Backspace count={7} delay={1000} />
        <a href={turnt}>Turntly</a>
      </Typist>
    );
  }
}
