import React, { Component }  from 'react';
import Clock from 'react-live-clock';
 
const WorldClock = props =>  (

        <div
        style={{padding: "10%", textAlign: "center",}}>

            <h7 style={{float: "left"}}>Richmond, VA:</h7>
            <br/>
            <h5>
            <Clock format={'dddd, MMMM DD '} timezone={'US/Eastern'} />
            </h5>
            <h2>
            <Clock format={' HH:mm a'} ticking={true} timezone={'US/Eastern'} />
            </h2>
            <h7 style={{float: "left"}}>Tokyo, Japan:</h7>
            <br/>
            <h5>
            <Clock format={'dddd, MMMM DD '} timezone={'Asia/Tokyo'} />
            </h5>
            <h2>
            <Clock format={' HH:mm a'} ticking={true} timezone={'Asia/Tokyo'} />
            </h2>
        </div>
        )

export default WorldClock;