import React from "react";
import ReactDOM from "react-dom";
import "./Settings.css";

export class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            settings: []
        };
    }
    render(){
        return (
            <div className= "settingsContainer"></div>  
        );
    }
}