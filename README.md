
# Weather App
[Built from Free Code Camp's:How to Build a Weather Application with React and React Hooks](https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/)

# Data & APIs:
### RapidAPI-GeoDBCities
 [Cities Endpoint](https://rapidapi.com/wirefreethought/api/geodb-cities)

### OpenWeatherMap.org
[Current Weather Endpoint](https://openweathermap.org/current)
 <br>

[5 Day Weather Forcast Endpoint](https://openweathermap.org/forecast5)
<br>
<br>
<br>
# Components
## Search Component
The Search Component returns a select(AsyncPaginatecomponent)that allows the user to search for cities based on data pulled from the GEO API endpoint.

The Search Component uses the useState hook to declare a state variable for `search` and initializes it's state as `null`.

## CurrentWeather Component
WIP

## Forecast Component
WIP
<br>
<br>
<br>
# Functions
`handleOnChange()` (Search Component)
<br>

 This function passes the parameter `searchData` and sets the state of `search` to `searchData`. It also updates the data when `onSearchChange` prop passed from the App Component calls `handleOnSearchChange`  to log out the data value.
<br>
<br>
<br>

`loadOptions()` (Search Component)
<br>

This function uses async/await to enable asynchronous, promise-based behavior when the select `inputValue` is passed.  It fetches the cities from the GEO API endpoint using the `minPopulation` parameter to limit the population of cities searched and maps a successful response to JSON (city latitude,longitude, name, and countrycode) or catches an error and console.logs() the error.
<br>
<br>
<br>

`handleOnSearchChange()` (App Component)
<br>
This function is called from the parent component App and takes in `searchData` which is longitude, latitude, and city name are grabbed from GeoDBCities API cities endpoint in the `Search Component` when user inputs a value.
<br>

It fetches the current weather from OpenWeatherMap API's current weather endpoint and forecast from forecast endpoint and sends the desired response.

These responses are captured and shared with CurrentWeather Component and Forecast Component via props and the response is output in both of these components.

# Getting Started with Create React App
(https://github.com/facebook/create-react-app).
This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
