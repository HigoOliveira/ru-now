import React from 'react'
import Meal from '../components/Meal'
import Meat from '../components/Meat'
import Stars from '../components/Stars'
import Tabs from '../components/Tabs'
import { red200 } from 'material-ui/styles/colors'

const styles = {
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    padding: '20px 0',
    background: red200
  }
}

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <div style={styles.actions}>
          <Meat />
          <Stars />
        </div>
        <Tabs />
      </div>
    )
}

export default MealLayout
