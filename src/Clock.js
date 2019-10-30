import React from 'react';
import './App.css';

function Clock (props){
    const format=(time)=>{
      let seconds = time % 60;
      let minutes = Math.floor(time / 60);
      minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
      seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
      return minutes + ':' + seconds;
    }
      const {time} = props;
      return (
        <div className="displayedTime">
          <h1>{format(time)}</h1>
        </div>
      )
  }
export default Clock;