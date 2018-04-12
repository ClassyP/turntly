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

export default class Searchbar extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    e.preventDefault();
    //console.log("e", e);
    //console.log("e.target.value", e.target.value);
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    //console.log('e', e);
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    this.props.query(this.state.value);
  };

  render() {
    return (
      <div>
        <InputGroup
          controlId="formBasicText"
          //   validationState={this.getValidationState()}
        >
          <Input
            value={this.state.value}
            onChange={this.handleChange} // updates this.state.value
            onKeyPress={this.handleKeyPress} // checks for enter keypress
          />
          <InputGroupAddon addonType="append">
            <Button onClick={this.handleSubmit}>Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
