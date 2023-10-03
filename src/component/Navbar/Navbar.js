import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <Navbar
      className="navbar"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Col xs="auto">
        <ul className="nav-ul">
          <li>
            <Link to='/' style={{ color: theme.color }}>Home</Link>
          </li>
          <li>
            <Link to="/news" style={{ color: theme.color }}>News</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: theme.color }}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: theme.color }}>Contact</Link>
          </li>
        </ul></Col>
      <Col xs="auto" className="search">
        <Row>
          <Col xs="auto">
            <Form inline>
              <div class="textInputWrapper">
                <input
                  placeholder="Type Here"
                  type="text"
                  class="textInput"
                ></input>
              </div>
            </Form>
          </Col>

          <Col xs="auto button-container">
            <label class="switch">
              <input type="checkbox" onClick={toggle}></input>
              <span class="slider"></span>
            </label>
          </Col>
        </Row>
      </Col>
    </Navbar>
  );
}

export default NavbarComponent;
