# Weather Forecast App - ForecastNow

## Description

A simple and responsive weather forecasting app that provides real-time weather data, 7-day forecasts, and city-based weather tracking. Users can search for weather information by city or use their geolocation to get personalized weather updates. Built using React and OpenWeather API.

## Live Demo

You can view the live version of the app here:
- [Live Forecast Now App on Vercel](https://forecast-now.vercel.app): Check out the live weather forecast application.

## Features

- Displays the current weather and 7-day forecast for a selected city.
- Users can choose a city from a dropdown or allow the app to - use their geolocation.
- Interactive and responsive user interface.
- Real-time data fetched from the OpenWeather API.

## Technologies Used

- React: JavaScript library for building the user interface.
- OpenWeather API: Provides weather data.
- Axios: Used for making HTTP requests.
- CSS: Styling the app to ensure a responsive design.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root directory of the project and add your OpenWeather API key:

```bash
VITE_OPENWEATHER_API_KEY=your-api-key
```

4. Run the app locally:

```bash
npm run dev
```

## Usage

- Upon loading the app, the weather for the default city (Istanbul) will be displayed.
- Users can select a city from the dropdown or allow the app to use their geolocation to display weather data.
- The 7-day forecast will show high and low temperatures, weather descriptions, and icons for each day.
