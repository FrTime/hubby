import React, { Component } from 'react'
import API from "../../util/API.js";



export default class WeatherAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            condition: "",
            location: "23220",
            high: 0,
            low: 0,
        }
    };
    componentDidMount(props) {
        this.queryAPI(this.state.location)
        this.updateData(this.props.width, this.props.height, this.props.x, this.props.y)

    }

    updateData = (weatherAPIWidth, weatherAPIHeight, weatherAPIX, weatherAPIY) => {



        API.updateUserData({ id: this.id },
            {
                $set: {
                    weatherAPIWidth: weatherAPIWidth,
                    weatherAPIHeight: weatherAPIHeight,
                    weatherAPIX: weatherAPIX,
                    weatherAPIY: weatherAPIY,
                }
            })

            .then(console.log("saved"))
            .catch(err => console.log(err));
    };

    saveData = (weatherAPIWidth, weatherAPIHeight, weatherAPIX, weatherAPIY) => {



        API.saveUserData({
            weatherAPIWidth: weatherAPIWidth,
            weatherAPIHeight: weatherAPIHeight,
            weatherAPIX: weatherAPIX,
            weatherAPIY: weatherAPIY,

        })

            .then(console.log("saved"))
            .catch(err => console.log(err));
    };

    queryAPI = query => {
        API.weatherSearch(query)

            // .then(res => this.setState({ results: res.response }))
            .then(res => {
                const f = res.data.main.temp;
                const temp = parseInt(f);
                const condition = res.data.weather[0].main;
                const high = parseInt(res.data.main.temp_max);
                const low = parseInt(res.data.main.temp_min);
                console.log(temp);
                this.setState({
                    temp: temp,
                    condition: condition,
                    high: high,
                    low: low
                });
                console.log(condition);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment >
                {/* image src is hard coded to help test the appearance */}
                <img src="http://www.iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico" alt="Current Weather Icon" style={{ maxHeight: "35%", maxWidth: "50%", margin: "5% 5% 0% 5%" }} />
                <h1 id="current-temp " style={{ textAlign: "center", fontSize: 36, margin: "5% 5% 0% 5%", padding: ".25em", float: "right", maxWidth: "50%" }}> {this.state.temp} &deg;F</h1>
                <h2 id="condition" style={{ textAlign: "left", margin: "5%" }}> {this.state.condition} </h2>
                <p id="high-temp" style={{ float: "left", padding: " 1em", }}> High : {this.state.high} &deg;F</p>
                <p id="low-temp" style={{ float: "right", padding: " 1em", }}> Low: {this.state.low} &deg;F</p>
            </React.Fragment>
        )
    }
}
