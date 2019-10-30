import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Clock from "./Clock";
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
      value:""
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }
  
  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }


  handleOnchage=(event)=>{
    const seconds = event.target.value;
    if(seconds.match(/[0-9]/)) {
      this.setState({ value : seconds})
    }
  }
  
  handleOnStart=()=>{
    this.setState({
      count: this.state.value,
      running: true
    })
  }
  
  handleStop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }
  
  handleReset() {
    this.setState(
      {count: 0}
    );
  }
  
  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }
  
  render() {
    const {count} = this.state;
    return (
      <div className="container">
        <Clock time={count}/>
        <TextField
          label="Enter time in seconds"
          margin="normal"
          variant="outlined"
          className="input"
          type="number"
          onChange={this.handleOnchage}
        />
        <div>
        <Button variant="contained" color="primary" className="button" onClick={()=>{this.handleOnStart()}}>
          Start
      </Button>
      <Button variant="contained" color="secondary" className="button" onClick={()=>{this.handleStop()}}>
        Stop
      </Button>
      <Button variant="contained" className="button" onClick={()=>{this.handleReset()}}>
        Reset
      </Button>
      </div>
      </div>
    )
  }
}

export default App;
