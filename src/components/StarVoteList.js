import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';

export default ({userVotes}) => {
  console.log('USerVotes:', userVotes);
  return (
    <div>
      <List>
        <Subheader>Star Votes</Subheader>
        {userVotes.map((vote, key)=>{
          return(
            <ListItem
              key={key}
              primaryText={vote.name}
              leftAvatar={<Avatar src={vote.avatar} />}
              rightIcon={<ActionGrade />}
            />
          )
        })}

      </List>
    </div>
  )
}
