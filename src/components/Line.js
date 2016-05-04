import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import Slider from 'material-ui/Slider';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Help from 'material-ui/svg-icons/action/help-outline';

const styles = {
    container: {
      minWidth: '80%',
      display: 'flex',
      justifyContent: 'space-around'
    },
    badge: {
      paddingLeft: 5
    },
    line: {
      minWidth: '95%'
    }
}

export default ({lineSize, handleLineUpdate, lastUpdate}) => {
  return (
    <div style={styles.container}>
      <div style={styles.badge}>
        <Badge
          badgeContent={10}
          secondary={true}
          badgeStyle={{top: 12, right: 20}}
        >
          <IconButton touch={true} tooltipPosition="bottom-right" tooltip="última atualização em minutos" style={{position: 'relative', bottom: 14}}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </div>
      <div style={{minWidth: '90%', display: 'flex'}}>
        <Slider
          value={lineSize}
          style={styles.line}
          min={0}
          step={5}
          max={100}
          onChange={handleLineUpdate.bind(this)}/>
          <IconButton style={styles.badge} touch={true} tooltipPosition="bottom-left" tooltip={`tamanho da fila está em ${lineSize}%`}>
            <Help />
          </IconButton>
      </div>
    </div>
  )
}
