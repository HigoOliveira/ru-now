import React from 'react'
import Meal from '../components/Meal'
import MealListContainer from '../containers/MealListContainer'
import Meat from '../components/Meat'
import Stars from '../components/Stars'
import Tabs from '../components/Tabs'

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <MealListContainer />
        <Meat />
        <Stars />
        <Tabs />
      </div>
    )
}

export default MealLayout
