import { Col, Row } from "react-bootstrap";

const ForeCast = ({ futureWeather }) => {
  return (
    <>
      <Row className="mt-4 gx-2 flex-nowrap next-up-section">
        {futureWeather.slice(0, 10).map(timeStamp => (
          <Col key={timeStamp.dt} className="mb-3">
            <div className="rounded-circle next-up d-flex flex-column justify-content-center text-center">
              <p className="m-3">
                <b>{timeStamp.dt_txt.slice(11, 16)}</b> {timeStamp.weather[0].main}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ForeCast;
