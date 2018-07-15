import React, { Component } from 'react';
import API from "../../util/API.js";
import "./TwitterWidget.css";


class TwitterWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 300,
            height: 300,

        }
    };

    render() {
        return (
            <div style={{ margin: ".75em" }}>
                <a class="twitter-timeline"
                    href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw"
                    data-width="600"
                    data-height="600"                
                    style={{ margin: ".5em" }}
                    data-chrome="nofooter"
                >
                </a>
            </div>
        )
    }
}



export default TwitterWidget;

// href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw" 