import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({}) =>  {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory} routes={routes} />
      </MuiThemeProvider>
    )
}

export default App
