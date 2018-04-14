import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Form,
  FormGroup,
  HelpBlock
} from "reactstrap";
import "./Searchbar.css";

export default class Searchbar extends React.Component {
  state = {
    value: "",
    location: ""
  };

  handleChange = e => {
    e.preventDefault();
    //console.log("e", e);
    //console.log("e.target.value", e.target.value);
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    //console.log('e', e);
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.props.query(this.state.value, this.state.location);
  };

  render() {
    return (
      <div>
        <InputGroup
          controlId="formBasicText"
          //   validationState={this.getValidationState()}
        >
          <Input
            name="value"
            value={this.state.value}
            onChange={this.handleChange} // updates this.state.value
            onKeyPress={this.handleKeyPress} // checks for enter keypress
          />
          <Input
            name="location"
            value={this.state.location}
            onChange={this.handleChange} // updates this.state.location
            onKeyPress={this.handleKeyPress} // checks for enter keypress
          />
          <InputGroupAddon addonType="append">
            <Button onClick={this.handleSubmit} id="submit">
              Submit
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
