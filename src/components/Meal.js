import React, { Component } from 'react';
import MealListContainer from '../containers/MealListContainer';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/device/access-alarm';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import {red500, orange500} from 'material-ui/styles/colors';

const styles = {
  wrapper: {
    width: '100%',
  },
  header: {
    backgroundColor: 'red',
    backgroundImage: 'url("http://lorempixel.com/1200/400/food/")',
    backgroundSize: 'cover',
    width: '100%',
    height: 400,
  },
  container: {
    display: 'flex',
  },
  time: {
    flexGrow: 1
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  info: {
    width: '50%',
    padding: '15px 20px',
    flexGrow: 3,
    display: 'flex',
    justifyContent: 'space-around'

  },
  list: {
    width: '50%',
    padding: '15px 20px',
    flexGrow: 2,
  }
}

export default ({}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header} />
        <div style={styles.container}>
          <div style={styles.time}>
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 50, left: 60}}
            >
              <IconButton
                touch={true}
                tooltipPosition="bottom-right"
                tooltip="Tempo para encerrar"
                style={{position: 'relative', bottom: 14}}
                iconStyle={styles.mediumIcon}>
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
          <div style={styles.info}>
            <div>
              <h1>Almoço</h1>
              <h3>Terça-feira, 13/05/2016</h3>
            </div>
            <FloatingActionButton
              iconStyle={styles.mediumIcon}
              style={{boxShadow: 'none'}}>
              <ArrowRight
              color={red500}
              hoverColor={orange500} />
            </FloatingActionButton>

          </div>
          <div style={styles.list}>
            <MealListContainer />
          </div>
        </div>
    </div>
  )
}
