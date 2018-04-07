// Searchbar
import React from "react";
import "./Searchbar.css";
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  InputGroup,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import Actions from "../../actions/Actions";

export default class Searchbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
      events: []
    };

    this.query = this.query.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 4) return "success";
    else if (length > 2) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    e.preventDefault();
    console.log('e', e);
    console.log('e.target.value', e.target.value);
    this.setState({ value: e.target.value });
    
    // let events = Actions.getEvents(e.target.value);
    // console.log("events", events);
  }

  query() {
    alert('QUERYING!');
    let events = Actions.getEvents(this.state.value);
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

          <InputGroup>
            <FormControl
              type="input"
              value={this.state.value}
              placeholder="Event Name or Venue"
              onChange={this.handleChange} //handles key strokes 
              onKeyPress={e => { //allows the enter key to submit form 
                if (e.key === 'Enter') {
                  this.query();
                }
              }}
            />
            <InputGroup.Button>
              <Button onClick={this.query}>
                Submit
              </Button>
            </InputGroup.Button>
          </InputGroup>

          <FormControl.Feedback />
          {/* <HelpBlock>*only letters*</HelpBlock> */}
        </FormGroup>
      </Form>
    );
  }
}

//export default Searchbar;
