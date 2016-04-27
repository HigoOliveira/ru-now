import React, { Component } from 'react';

export default ({lineSize, lastUpdate, handleLineUpdate}) => {
  return (
    <div>
      <span>{lastUpdate}</span>
      <input
        type='range'
        value={lineSize}
        min='0'
        max='100'
        onChange={handleLineUpdate.bind(this)}/>
        <span>{lineSize}</span>
    </div>
  )
}
