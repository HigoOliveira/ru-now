import React from 'react'
import { StyleRoot, Style } from 'radium'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as Colors from 'material-ui/styles/colors'
// require("style!css!./assets/sanitize.css")
// require("style!css!./assets/styles.css")

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#534847',
    backgroud: 'red',
    primary1Color: Colors.red500,
    primary2Color: Colors.red700,
    primary3Color: Colors.brown400,
    accent1Color: Colors.orange200,
    accent2Color: Colors.brown100,
    accent3Color: Colors.brown500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.brown300,
    disabledColor: Colors.darkBlack,
    pickerHeaderColor: Colors.red500,
    clockCircleColor: Colors.darkBlack,
    shadowColor: Colors.fullBlack,
  }
});

const App = ({}) =>  {
    return (
      <StyleRoot>
      <Style rules={{
      	'body, html, #root': {
      		margin: 0,
      		padding: 0
      	},
      	'abbr[title]': {
      		textDecoration: 'underline dotted'
      	},
      	'audio:not([controls])': {
      		display: 'none'
      	},
      	'b, strong': {
      		fontWeight: 'bolder'
      	},
      	button: {
      		WebkitAppearance: 'button',
      		overflow: 'visible'
      	},
      	'button, input': {},
      	'button::-moz-focus-inner, input::-moz-focus-inner': {
      		border: 0,
      		padding: 0
      	},
      	'button:-moz-focusring, input:-moz-focusring': {
      		outline: '1px dotted ButtonText'
      	},
      	'button, select': {
      		textTransform: 'none'
      	},
      	details: {
      		display: 'block'
      	},
      	html: {
      		msOverflowStyle: '-ms-autohiding-scrollbar',
      		overflowY: 'scroll',
      		WebkitTextSizeAdjust: '100%'
      	},
      	hr: {
      		overflow: 'visible'
      	},
      	input: {
      		WebkitBorderRadius: 0
      	},
      	'input[type="button"], 	input[type="reset"], 	input[type="submit"]': {
      		WebkitAppearance: 'button'
      	},
      	'input[type="number"]': {
      		width: 'auto'
      	},
      	'input[type="search"]': {
      		WebkitAppearance: 'textfield'
      	},
      	'input[type="search"]::-webkit-search-cancel-button, 		input[type="search"]::-webkit-search-decoration': {
      		WebkitAppearance: 'none'
      	},
      	main: {
      		display: 'block'
      	},
      	pre: {
      		overflow: 'auto'
      	},
      	progress: {
      		display: 'inline-block'
      	},
      	summary: {
      		display: 'block'
      	},
      	'svg:not(:root)': {
      		overflow: 'hidden'
      	},
      	template: {
      		display: 'none'
      	},
      	textarea: {
      		overflow: 'auto',
      		resize: 'vertical'
      	},
      	'[hidden]': {
      		display: 'none'
      	},
      	'*, :before, :after': {
      		boxSizing: 'inherit',
      		borderStyle: 'solid',
      		borderWidth: 0
      	},
      	'*': {
      		fontSize: 'inherit',
      		lineHeight: 'inherit',
      		margin: 0,
      		padding: 0,
      		backgroundRepeat: 'no-repeat'
      	},
      	':before, :after': {
      		textDecoration: 'inherit',
      		verticalAlign: 'inherit'
      	},
      	'button, input, select, textarea': {
      		fontFamily: 'inherit',
      		fontStyle: 'inherit',
      		fontWeight: 'inherit',
      		backgroundColor: 'transparent',
      		color: 'inherit'
      	},
      	'a, area, button, input, label, select, textarea, [tabindex]': {
      		msTouchAction: 'manipulation',
      		touchAction: 'manipulation'
      	},
      	select: {
      		MozAppearance: 'none',
      		WebkitAppearance: 'none'
      	},
      	'select::-ms-expand': {
      		display: 'none'
      	},
      	'select::-ms-value': {
      		color: 'currentColor'
      	},
      	svg: {
      		fill: 'currentColor'
      	},
      	'[aria-busy="true"]': {
      		cursor: 'progress'
      	},
      	'[aria-controls]': {
      		cursor: 'pointer'
      	},
      	'[aria-disabled]': {
      		cursor: 'default'
      	},
      	'[hidden][aria-hidden="false"]': {
      		clip: 'rect(0 0 0 0)',
      		display: 'inherit',
      		position: 'absolute'
      	},
      	'[hidden][aria-hidden="false"]:focus': {
      		clip: 'auto'
      	},
      	':root': {
      		backgroundColor: '#ffffff',
      		boxSizing: 'border-box',
      		color: '#000000',
      		cursor: 'default',
      		font: '100%/1.5 sans-serif'
      	},
      	a: {
      		textDecoration: 'none'
      	},
      	'audio, canvas, iframe, img, svg, video': {
      		verticalAlign: 'middle'
      	},
      	'button, [type="button"], [type="date"], [type="datetime"], [type="datetime-local"], [type="email"], [type="month"], [type="number"], [type="password"], [type="reset"], [type="search"], [type="submit"], [type="tel"], [type="text"], [type="time"], [type="url"], [type="week"], select, textarea': {
      		minHeight: '1.5em'
      	},
      	'code, kbd, pre, samp': {
      		fontFamily: 'monospace, monospace'
      	},
      	'nav ol, nav ul': {
      		listStyle: 'none'
      	},
      	small: {
      		fontSize: '75%'
      	},
      	table: {
      		borderCollapse: 'collapse',
      		borderSpacing: 0
      	},
      	'::-moz-selection': {
      		backgroundColor: '#b3d4fc',
      		color: '#ffffff',
      		textShadow: 'none'
      	},
      	'::selection': {
      		backgroundColor: '#b3d4fc',
      		color: '#ffffff',
      		textShadow: 'none'
      	}
      }} />
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={browserHistory} routes={routes} />
        </MuiThemeProvider>
      </StyleRoot>
    )
}

export default App
