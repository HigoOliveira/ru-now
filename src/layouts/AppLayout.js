import React from 'react'
import LineContainer from '../containers/LineContainer'
import Menu from '../components/Menu'

const AppLayout = ({children, time}) =>  {
    return (
      <div style={{border: '1px solid black', padding: 15, margin: 10}}>
      	<h1>Relogio: {Math.floor(time / 1000 % 60)}</h1>
        <LineContainer time={time} />
        <Menu />
        {children}
      </div>
    )
}

export default AppLayout
