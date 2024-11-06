import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState("Istanbul")
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const fetchWeatherData = async (city) => {
        console.log("Fetching weather data for city:", city);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast`,
                {
                    params: {
                        q: city,
                        cnt: 7,
                        units: "metric",
                        appid: API_KEY
                    }
                }
            );
            setWeather(response.data);
        } catch (error) {
            console.log("Error fetching weather data: ", error);

        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await axios.get(
                            `https://api.openweathermap.org/geo/1.0/reverse`,
                            {
                                params: {
                                    lat: latitude,
                                    lon: longitude,
                                    limit: 1,
                                    appid: API_KEY
                                }
                            }
                        );
                        const cityName = response.data[0]?.name || city;
                        setCity(cityName);
                        fetchWeatherData(cityName);
                    } catch (error) {
                        console.log("Error fetching location data:", error);
                        fetchWeatherData(city);
                    }
                },
                (error) => {
                    // Hata durumunda hata kodunu loglayalım
                    console.error("Geolocation error:", error.message);

                    // Alternatif şehir verisi getirme
                    fetchWeatherData(city);
                }
            );
        } else {
            console.log("Geolocation not supported");
            fetchWeatherData(city);
        }
    };

    useEffect(() => {
        getLocation();
    }, [])

    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }
    }, [city])

    const values = {
        weather,
        fetchWeatherData,
        city,
        setCity
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => useContext(WeatherContext);
