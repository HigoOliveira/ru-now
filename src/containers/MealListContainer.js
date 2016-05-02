import React, { Component } from 'react'
import MealList from '../components/MealList'

export default class MealListContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      listMeal: [{
        type: "4",
        nameMeal: "Frango assado"
      },
      {
        type: "5",
        nameMeal: "Polenta c/ molho"
      },
      {
        type: "6",
        nameMeal: "Acelga/Rúcula/Tomate"
      }
    ]
    }
  }

  render(){
    return(
        <MealList listMeal={this.state.listMeal}/>
    )
  }
}
