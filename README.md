RUNow
=====================

An awesome app for hungry university people.

### Developing Front-End
Make sure you have [NodeJS](http://nodejs.org) and Nodemon installed with `npm i -g nodemon`.

1. `git clone https://github.com/ufv-js/ru-now.git`
1. `cd ru-now` and `npm i`
1. `npm start` to start developing the front-end, with only react-hot-loader

Now edit `app/App.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Developing Back-End

1. Use `npm run api` to develop the back-end, with Nodemon running
1. `npm run build` will create a build for the Front-End
1. Finally use `npm run prod` to test how it would run in production

All the API, and authentication files are in the `server` folder.

### Deploy
The easiest way is to deploy to Heroku.

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to add a separate config for production with hot reloading disabled and minification enabled. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC
