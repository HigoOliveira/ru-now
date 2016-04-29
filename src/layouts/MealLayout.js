import React from 'react'
import Meal from '../components/Meal'
import MealList from '../components/MealList'
import Meat from '../components/Meat'
import Stars from '../components/Stars'
import Tabs from '../components/Tabs'
import CommentBox from '../components/CommentBox'

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <MealList />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    )
}

export default MealLayout
