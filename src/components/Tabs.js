import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Comment from 'material-ui/svg-icons/communication/comment';
import Stars from 'material-ui/svg-icons/action/stars';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';


export default ({}) => {
  return (
    <Tabs>
    	<Tab icon={<Comment />} >
    	</Tab>
    	<Tab icon={<Restaurant />} >
    	</Tab>
    	<Tab icon={<Stars />} >
    	</Tab>
    </Tabs>
  )
}
