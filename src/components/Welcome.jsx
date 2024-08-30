import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const location = localStorage.getItem("Location");
    if (location) {
      navigate("/location/" + location);
    }
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-center pt-5 mb-3">
        <NavLink
          to={"/"}
          type="btn"
          className={"h1 link-underline link-underline-opacity-0"}
        >
          <h1>Welcome to MeoWeather</h1>
        </NavLink>
      </div>
    </Container>
  );
};

export default Welcome;
