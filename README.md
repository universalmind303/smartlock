# Smartlock

## Demo app for Casa IQ code challenge
The App is split into two parts. Browser and Mobile. They both have the same commands
### Installation
start by installing global linting config
`yarn`

then install dependencies in both browser and mobile
`cd browser && yarn`
`cd mobile && yarn`

### Development
`yarn start`

#### Browser
Open up your favorite browser to localhost:9000 to view the app.
The browser has access to 2 routes. /device/:device_name and /about_us

localhost:9000/ will render nothing.

to view the app you must go to /device/${insert device name here}

#### Mobile
Due to the fact that you cannot setup views the same way in react-native, upon load, the default screen is a link to start the demo.

All of the routes will generate the same data, to simulate other data or to test all features, you can easily plug in an existing api, or modify the data to your liking in /Device/api.js.

### Testing
`yarn test`

### Linting
`yarn lint`
