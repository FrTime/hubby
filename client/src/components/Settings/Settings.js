import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Settings.css";
import { ButtonToolbar, DropdownButton, SplitButton, MenuItem, } from "react-bootstrap";


const winWidth =  window.innerWidth/8;
const winHeight = parseInt(window.innerHeight - 34);
console.log(window.innerHeight)


 const Settings = props => (

<ButtonToolbar style={{position: "absolute", top: winHeight, right: winWidth, borderRadius:"50%"}}>
    <DropdownButton
      bsStyle="primary"
      title="+"
      dropup
      pullRight
      noCaret
      id="split-button-dropup-pull-right"
      style={{borderRadius: "50%"}}

    >
      <MenuItem eventKey="toggle" value={true} onClick={props.handleBtnClick} ></MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
    )
  

export default Settings;
