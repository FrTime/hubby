import React, { Component } from 'react'
import API from "../../util/API.js";



export default class TrafficReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSets: [],

        };
    }
        componentDidMount(props) {
            this.queryAPI(this.state.location)

        }

        queryAPI = query => {
            API.trafficSearch(query)
                .then(res => {
                    console.log("traffic widg: " + res);
                    let dataArray = [];
                    for (let i = 0; i < res.data.resourceSets[0].estimatedTotal; i++) {
                        const data = {
                            description: res.data.resourceSets[0].resources[i].description,
                            roadClosed: res.data.resourceSets[0].resources[i].roadClosed,
                            severity: res.data.resourceSets[0].resources[i].severity,
                        }
                        dataArray.push(data)
                    }
                    console.log("datasets: " + dataArray)
                    // console.log("descript: " + description)
                    this.setState({
                        dataSets: dataArray
                    })
                })
                .catch(err => console.log(err));

        }

        render() {
            return (
                    <div style={{
                        padding: "5%",
                        overflow: "auto"
                    }}>
                    <h3>Traffic Reports</h3>
                        
                        {this.state.dataSets.map((item, i) => (
                            <div
                                key={i}
                                type={this.state.dataSets[i]}>
                                <p>Incident: {this.state.dataSets[i].description}</p>
                                <p>{this.state.dataSets[i].roadClosed === true ? "Road is Closed" : "Road is Open"}</p>
                                <p>Severity: {this.state.dataSets[i].severity === 1 ? "Low Impact" : 
                                                this.state.dataSets[i].severity === 2 ? "Minor Impact" : 
                                                this.state.dataSets[i].severity === 3 ? "Moderate Impact" :
                                                this.state.dataSets[i].severity === 3 ? "Severe Impact" : null}</p>
                                                <br/>
                                </div>
                        ))}
                    </div>
            )
        }
    }
