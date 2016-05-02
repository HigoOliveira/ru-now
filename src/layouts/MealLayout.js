import React from 'react'
import Meal from '../components/Meal'
import MealListContainer from '../containers/MealListContainer'
import Meat from '../components/Meat'
import Stars from '../components/Stars'
import Tabs from '../components/Tabs'
import CommentBox from '../components/CommentBox'

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <MealListContainer />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    )
}

export default MealLayout
