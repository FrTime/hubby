import React, { Component } from 'react'


const Clocker = React.createClass({
    setTime: function () {
      const date = new Date()
      const timeOptions = {hour: '2-digit', minute:'2-digit', second:'2-digit'}
      const currentTime = date.toLocaleTimeString([], timeOptions)
  
      this.setState({
        currentTime: currentTime
      })
    },
    componentWillMount: function () {
      this.setTime()
    },
    componentDidMount: function () {
      window.setInterval(function () {
        this.setTime()
      }.bind(this), 1000)
    },
    render: function () {
      return (
        <div className='clocker'>
        <h2> Current Time </h2>
        {this.state.currentTime}</div>
      )
    }
  })
  
  ReactDOM.render(<Clocker />, document.getElementById('aBraveContainer'))