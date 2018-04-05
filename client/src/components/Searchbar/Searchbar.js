// Searchbar
import React from "react";
import "./Searchbar.css";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import Actions from "../../actions/Actions";

export default class Searchbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 4) return "success";
    else if (length > 2) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    let events = Actions.getEvents();
    console.log("events", events);
  }

  render() {
    return (
      <Form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          {/* <ControlLabel>Search</ControlLabel> */}
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Event Name or Venue"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          {/* <HelpBlock>*only letters*</HelpBlock> */}
        </FormGroup>
      </Form>
    );
  }
}

//export default Searchbar;
