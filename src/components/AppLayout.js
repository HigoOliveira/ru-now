import React from 'react'
import LineContainer from '../containers/LineContainer'
import Menu from './Menu'
import Meal from './Meal'
import MealList from './MealList'
import Meat from './Meat'
import Stars from './Stars'
import Tabs from './Tabs'
import CommentBox from './CommentBox'

const App = ({}) =>  {
    return (
      <div>
        <LineContainer />
        <Menu />
        <Meal />
        <MealList />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    )
}

export default App
