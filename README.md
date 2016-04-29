# react-native-redux-real-world

[![Dependency Status](https://david-dm.org/kkav004/react-native-redux-real-world.svg?style=flat)](https://david-dm.org/kkav004/react-native-redux-real-world)
[![devDependency Status](https://david-dm.org/kkav004/react-native-redux-real-world/dev-status.svg?style=flat)](https://david-dm.org/kkav004/react-native-redux-real-world#info=devDependencies)

A starter boilerplate for a mobile app using React Native and Redux based on [real-world](https://github.com/reactjs/redux/tree/master/examples/real-world) Redux web app.

## Technology Stack
### [react-native](https://facebook.github.io/react-native/)
*React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.*

This app uses
- [View](https://facebook.github.io/react-native/docs/view.html) component. It is a container that supports layout with flexbox, style, some touch handling, and accessibility controls, and is designed to be nested inside other views and to have 0 to many children of any type. View maps directly to the native view equivalent on whatever platform React is running on, whether that is a UIView, \<div\>, android.view, etc.
- [Text](https://facebook.github.io/react-native/docs/text.html) component for displaying text which supports nesting, styling, and touch handling.
- [StyleSheet](http://facebook.github.io/react-native/docs/stylesheet.html) as UI styling abstraction similar to CSS StyleSheets
- [AppRegistry](http://facebook.github.io/react-native/docs/appregistry.html) as JS entry point to running this app

### [redux](http://rackt.github.io/redux/index.html)
*Redux is a predictable state container for JavaScript apps.
It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.*

### [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
*Router for React Native based on new React Native Navigation API.*

### [normalizr](https://github.com/gaearon/normalizr)
*Normalizes deeply nested JSON API responses according to a schema for Flux and Redux apps.*

### [redux-thunk](https://github.com/gaearon/redux-thunk)
*Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.*

### [rnpm](https://github.com/rnpm/rnpm)
*React Native Package Manager automatically scans your source directory and dependencies you are working with. This approach allows it to link all the things without supplying any extra configuration. It detects Android package names, import paths, gradle location - and for iOS - it works with any code structure you have ever came up with.*

### [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools)
*A live-editing time travel environment for React Native, hybrid, desktop and server side Redux apps based on [Redux DevTools](https://github.com/gaearon/redux-devtools)*

## Setup
- Install [Node](https://nodejs.org) for backend server development
- Install [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for mobile client development
- Install [React Native Package Manager](https://github.com/rnpm/rnpm) for mobile client development
- Clone react-native-redux-real-world and install node modules:
```shell
$ git clone https://github.com/kkav004/react-native-redux-real-world.git
```
- Install and link node packages using React Native Package Manager
```shell
$ cd react-native-redux-real-world
$ rnpm install          # install and link dependencies listed in ./package.json
```

## To run
- Start backend server on port 3000 (hardcoded in server.js)
```shell
$ npm start-backend              
```
- Start lightweight development server required by react-native
```shell
$ npm start-react-native              
```
- For iOS run
```shell
$ react-native run-ios
```
- For Android run (assuming you have an emulator or device attached)
```shell
$ react-native run-android
```

## Remote DevTools
- Install [RemoteDev](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph) Chrome app
- Install and start [RemoteDev Server](https://github.com/zalmoxisus/remotedev-server) locally
```shell
$ npm start-devtools-server
```

## Debugging
[Access the in-app developer menu](https://facebook.github.io/react-native/docs/debugging.html) and select ``Debug in Chrome``

## Licence
MIT
