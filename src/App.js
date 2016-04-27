import React from 'react'
import AppLayout from './components/AppLayout'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ({}) =>  {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppLayout />
      </MuiThemeProvider>
    )
}

export default App
