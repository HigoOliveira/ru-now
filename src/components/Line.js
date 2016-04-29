import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import Slider from 'material-ui/Slider';

export default ({time, lineSize, lastUpdate, handleLineUpdate}) => {
  return (
    <div>
      <TimeAgo date={time} />
      <Slider
        value={lineSize}
        min={0}
        step={5}
        max={100}
        onChange={handleLineUpdate.bind(this)}/>
        <span>{lineSize}</span>
    </div>
  )
}
