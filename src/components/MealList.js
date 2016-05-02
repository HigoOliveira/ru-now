import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
export default ({listMeal}) => {
  return (
    <div>
      <h1>MeatList</h1>
      <List>
      {listMeal.map((meal, key) =>
      {return <ListItem key={key} primaryText={meal.nameMeal} />})}
      </List>
    </div>
  )
}
