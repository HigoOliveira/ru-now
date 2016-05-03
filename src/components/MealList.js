import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
export default ({listMeal}) => {
  return (
    <div>
      <List>
      {listMeal.map((meal, key) =>
      {return <ListItem key={key} primaryText={meal.nameMeal} />})}
      </List>
    </div>
  )
}
