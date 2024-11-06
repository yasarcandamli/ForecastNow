import { useWeather } from "../../contexts/WeatherContext";
import DropDown from "../DropDown/DropDown";

function WeatherDisplay() {
    const { weather, city, setCity, fetchWeatherData } = useWeather();

    if (!weather) {
        return <p>Loading...</p>
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();

    const handleCitySelect = (newCity) => {
        console.log("City being fetched:", newCity);
        setCity(newCity);
        fetchWeatherData(newCity);
    };

    return (
        <div className="weather-display">
            <h2 className="weather-title">Weather Forecast for <span>{city}</span></h2>

            <DropDown onSelect={handleCitySelect} />

            <div className="weekly-forecast">
                {weather.list.map((day, index) => {
                    const dayIndex = (today + index) % 7;
                    const isToday = index === 0;

                    return (
                        <div key={index}
                            className={`weather-card ${isToday ? "today" : ""}`}>
                            <h3>{daysOfWeek[dayIndex]}</h3>
                            <img
                                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                alt={day.weather[0].description} />
                            <p>{day.weather[0].description}</p>
                            <p>High: {day.main.temp_max ? day.main.temp_max : "-"} °C</p>
                            <p>Low: {day.main.temp_min ? day.main.temp_min : "-"} °C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherDisplay;