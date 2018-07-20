import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

export default class Dropdown extends Component {
  render() {
    return (
      <DropdownButton
      >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }
}
