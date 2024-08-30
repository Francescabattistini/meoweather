import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WeatherLocationForm = ({ theme }) => {
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("Location", location);
    navigate("/location/" + location);
  };

  return (
    <Container>
      <Form onSubmit={e => handleSubmit(e)} data-bs-theme={theme}>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Control
            type="text"
            value={location}
            placeholder="Choose your Location"
            onChange={e => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant={theme === "light" ? "warning" : "primary"} type="submit" className="d-block mx-auto">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default WeatherLocationForm;
