import React, { Component } from 'react'
import API from "../../util/API.js";
import "./css/weather-icons.min.css";


export default class WeatherAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            condition: "",
            picture: "wi wi-day-cloudy",
            location: "23220",
            high: 0,
            low: 0,
        }
    };
    componentDidMount(props) {
        this.queryAPI(this.state.location)

    }

    // componentDidUpdate(props) {
    //     this.updateData(this.props.width, this.props.height, this.props.x, this.props.y)
    // }


    // depricated
    // updateData = (weatherAPIWidth, weatherAPIHeight, weatherAPIX, weatherAPIY) => {



    //     API.updateUserData(
    //         {
    //             $set: {
    //                 weatherAPIWidth: weatherAPIWidth,
    //                 weatherAPIHeight: weatherAPIHeight,
    //                 weatherAPIX: weatherAPIX,
    //                 weatherAPIY: weatherAPIY,
    //             }
    //         })
    //         .then(console.log("updated"))
    //         .catch(err => console.log(err));
    // };

    // locationChangeHandler = () => {

    // }

    // saveData = (weatherAPIWidth, weatherAPIHeight, weatherAPIX, weatherAPIY) => {



    //     API.saveUserData({
    //         weatherAPIWidth: weatherAPIWidth,
    //         weatherAPIHeight: weatherAPIHeight,
    //         weatherAPIX: weatherAPIX,
    //         weatherAPIY: weatherAPIY,

    //     })

    //         .then(console.log("saved"))
    //         .catch(err => console.log(err));
    // };

    picturePicker = (condition) => {
        let newStatePicture;
        switch (condition) {
            case "Rain" || "Showers" || "Heavy Rain":
            newStatePicture = "wi wi-rain";
            break;

            case "Clear" || "Sunny":
            newStatePicture = "wi wi-day-sunny";
            break;

            case "Clouds" || "Cloudy" || "Overcast":
            newStatePicture = "wi wi-cloudy"
            break;

            case "Snow" || "snowy" || "Ice":
            newStatePicture = "wi wi-snow";
            break;

            case "Thunderstorm" || "Thunder Storm":
            newStatePicture = "wi wi-thunderstorm";
            break;
        } 

        this.setState({
            picture: newStatePicture
        })
    }

    queryAPI = query => {
        API.weatherSearch(query)
            .then(res => {
                const f = res.data.main.temp;
                const temp = parseInt(f);
                const condition = res.data.weather[0].main;
                const high = parseInt(res.data.main.temp_max);
                const low = parseInt(res.data.main.temp_min);
                this.picturePicker(condition)
                console.log(temp);
                this.setState({
                    temp: temp,
                    condition: condition,
                    high: high,
                    low: low
                });
                console.log(condition);
            })
            .then()
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment >
                <i className={this.state.picture} style={{ fontSize: "50px", maxHeight: "35%", maxWidth: "50%", margin: "5% 5% 0% 5%",  }} ></i>
                <h1 id="current-temp " style={{ textAlign: "center", fontSize: 36, margin: "5% 5% 0% 5%", padding: ".25em", float: "right", maxWidth: "50%" }}> {this.state.temp} &deg;F</h1>
                <h2 id="condition" style={{ textAlign: "left", margin: "5%" }}> {this.state.condition} </h2>
                <p id="high-temp" style={{ float: "left", padding: " 1em", }}> High : {this.state.high} &deg;F</p>
                <p id="low-temp" style={{ float: "right", padding: " 1em", }}> Low: {this.state.low} &deg;F</p>
            </React.Fragment>
        )
    }
}
