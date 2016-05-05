import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';

export default ({}) => {
  return (
    <div>
      <FloatingActionButton disabled={true} secondary={true}>
        <Restaurant />
      </FloatingActionButton>
    </div>
  )
}
