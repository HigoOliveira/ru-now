import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

export default ({time, lineSize, lastUpdate, handleLineUpdate}) => {
  return (
    <div>
      <span>Atualizado a {Math.floor((time - lastUpdate / 1000) % 60)} segundos</span>
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
