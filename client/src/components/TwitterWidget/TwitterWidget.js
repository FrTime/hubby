import React, { Component } from 'react'; 
import API from "../../util/API.js"; 
 
 
 
export default class TwitterWidget extends Component { 
  constructor(){ 
    super(); 
  }    
    componentDidMount() { 
          this.searchTwitter(); 
    } 
 
// needs to be changed to Axios 
  searchTwitter(){ 
        API.twitterSearch() 
        .then(res=>{ 
              var tweets = res.data.statuses; 
              console.log(tweets); 
 
        }) 
 }; 
    
//  
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <h1 className="App-title">The Test App</h1> 
        </header> 
        <button style = {{height: "50px", width: "150px"}} onClick = {this.searchTwitter}> CLICK ME </button> 
      </div> 
    ); 
  }; 
}; 