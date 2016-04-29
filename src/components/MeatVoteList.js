import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import { lightBlack} from 'material-ui/styles/colors';
import TimeAgo from 'react-timeago';

export default ({list}) => {
  return (
    <List>
      {
        list.map(function(result) {
          return <ListItem
                    key={result.userName}
                    primaryText={<text>{result.userName} <span style={{color: lightBlack}}><TimeAgo date={result.userDate} /></span></text>}
                    leftAvatar={<Avatar src={result.userImage} />}
                    />
        })
      }
    </List>
  )
}
