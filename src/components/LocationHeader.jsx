import { useEffect, useState } from "react";

const LocationHeader = ({ weather }) => {
  const [time, setTime] = useState("");
  const getTime = () => {
    setInterval(() => {
      const today = new Date();
      const hours = today.getHours();
      let minutes = today.getMinutes();
      if (minutes.toString().length < 2) {
        minutes = "0" + minutes.toString();
      }
      setTime(hours + ":" + minutes);
    }, 1000);
  };
  useEffect(() => {
    getTime();
  }, []);
  return (
    <div className="graphic d-flex flex-column justify-content-center align-items-center">
      <h2 className="m-0">{weather.name}</h2>
      <p className="temperature m-0">{Math.floor(weather.main.temp)}C°</p>
      <p className="m-0 fs-4">{time}</p>
      <p className="fs-4 m-0">
        {weather.weather[0].main}
        <span>
          <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt="weather-icon" />
        </span>
      </p>
    </div>
  );
};

export default LocationHeader;
