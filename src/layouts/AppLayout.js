import React from 'react'
import TimeAgo from 'react-timeago'
import LineContainer from '../containers/LineContainer'
import Menu from '../components/Menu'

const AppLayout = ({children, time}) =>  {
    return (
      <div style={{border: '1px solid black', padding: 15, margin: 10}}>
        <LineContainer time={time} />
        <Menu />
        {children}
      </div>
    )
}

export default AppLayout
