import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import LocationHeader from "../components/LocationHeader";
import ForeCast from "../components/ForeCast";
import WeatherDetails from "../components/WeatherDetails";

const Location = ({ theme }) => {
  const params = useParams();

  const [weather, setWeather] = useState(null);
  const [futureWeather, setFutureWeather] = useState(null);

  const navigation = useNavigate();

  const fetchWeather = async () => {
    try {
      const respCor = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          params.location +
          "&limit=1&appid=82d9b7b32adef52c6e474f1919c3254a"
      );
      if (respCor.ok) {
        const coordinates = await respCor.json();
        const lat = coordinates[0].lat;
        const lon = coordinates[0].lon;
        fetchToday(lat, lon);
        fetchFuture(lat, lon);
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      navigation("*");
      console.log(error);
    }
  };

  const fetchToday = async (lat, lon) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&appid=82d9b7b32adef52c6e474f1919c3254a"
      );
      if (resp.ok) {
        const locationObj = await resp.json();
        setWeather(locationObj);
      } else {
        throw new Error("Errore nel secondo fetch");
      }
    } catch (error) {
      navigation("*");
      console.log(error);
    }
  };

  const fetchFuture = async (lat, lon) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&appid=82d9b7b32adef52c6e474f1919c3254a"
      );
      if (resp.ok) {
        const locationObj = await resp.json();
        setFutureWeather(locationObj);
      } else {
        throw new Error("Errore nel terzo fetch");
      }
    } catch (error) {
      navigation("*");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center align-items-center justify-content-center">
        {weather && futureWeather ? (
          <>
            <LocationHeader weather={weather} />
            <ForeCast futureWeather={futureWeather.list} />
            <WeatherDetails weather={weather} theme={theme} />
            <div className="d-flex justify-content-start position-fixed bottom-0 start-0 p-0 ms-2 mb-2 go-back">
              <NavLink to={"/"} className={theme === "light" ? "btn bg-warning " : "btn btn-primary"}>
                Change Location
              </NavLink>
            </div>
          </>
        ) : (
          <Spinner variant={theme === "light" ? "warning" : "primary"} className="mt-5" />
        )}
      </Row>
    </Container>
  );
};

export default Location;
