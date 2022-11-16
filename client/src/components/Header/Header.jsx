import "../Header/Header.css";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { check, logOut } from "../../redux/actions/Auth/authActions";
import Search from "../Search/Search";

export default function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    // console.log(auth.isAuth)
    if (!auth.isAuth) {
      dispatch(check());
    }
  }, [auth]);

  return (
    <Navbar
      // bg="light"
      expand="lg"
      className="header"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" alt="" width="55" height="55" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 md-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navButt" as={Link} to="/">
              Главная
            </Nav.Link>

            <NavDropdown
              className="navButt"
              title="Каталог"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={Link} to="/cards">
                Все товары
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/cards/"}>
                Услуги
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Оборудование</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link className="navButt" as={Link} to="ads">
              Разместить объявление
            </Nav.Link>
          </Nav>

          {auth?.isAuth ? (
            <>
              <Nav.Link
                className="navButt"
                as={Link}
                to={`/user/cabinet/main/${auth.id}`}
              >
                Личный кабинет
              </Nav.Link>
              <Nav.Link className="navButt" onClick={() => dispatch(logOut())}>
                {" "}
                Выход
              </Nav.Link>
            </>
          ) : (
            <Nav.Link className="navButt" as={Link} to="/auth/register">
              Регистрация/Вход
            </Nav.Link>
          )}
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
