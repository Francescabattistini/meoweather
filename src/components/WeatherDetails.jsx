const WeatherDetails = ({ weather }) => {
  return (
    <div className="d-flex justify-content-center mt-2 details-section mb-5">
      <div className="d-flex flex-column justify-content-center pe-3 text-center">
        <h3 className="h6 m-0">CLOUDS</h3>
        <p className="m-0">{weather.clouds.all}%</p>
      </div>
      <div className="d-flex flex-column px-3 border border-top-0 border-bottom-0 text-center">
        <h3 className="h6 m-0">WIND</h3>
        <p className="m-0">{weather.wind.speed} km/h</p>
      </div>
      <div className="d-flex flex-column ps-3 text-center">
        <h3 className="h6 m-0">HUMIDITY</h3>
        <p className="m-0">{weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
