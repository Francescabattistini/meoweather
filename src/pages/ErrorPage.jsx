import { NavLink } from "react-router-dom";

const ErrorPage = ({ theme }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>404 - Not Found</h2>
      <p className="lead">Seems like there was an error</p>
      <NavLink to={"/"} className={theme === "light" ? "btn btn-warning" : "btn btn-primary"}>
        Go back Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
