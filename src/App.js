import React from 'react'
import LineContainer from './containers/LineContainer'
import Menu from './components/Menu'
import Meal from './components/Meal'
import MealList from './components/MealList'
import Meat from './components/Meat'
import Stars from './components/Stars'
import Tabs from './components/Tabs'
import CommentBox from './components/CommentBox'

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
