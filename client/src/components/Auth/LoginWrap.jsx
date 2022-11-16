import React,{ useState,useEffect } from "react";
import style from "../Auth/style.module.css";
import { Link, useLocation } from "react-router-dom";


import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";




export default function LoginWrap({ children }) {
  const [title, setTitle] = useState("Регистрация");
  const location = useLocation();
  useEffect(() => {
    const log = location.pathname === "/auth/login";
    if (log) {
      setTitle("Авторизация");
    }
  }, []);



  return (
    <>
     {/* <h1>Маркет плэйс  </h1> */}
      <Container className={style.cont}>
        <div className="picture">
        <img src='/images/ferm.jpg' className={style.picregferm} alt='фото'/>
        </div>
        <div className={style.cardAuth}>
        <Card style={{ width: "34rem"}} className="p-5" >
        {/* ,height: "34rem" */}
          <h2>{title}</h2>
          <Row>
            <Col className="d-flex justify-content-around mt-3">
              <Button variant="light">
                <Link to="/auth/register"><span className="spanTitle">Регистрация</span></Link>
              </Button>
              <Button variant="light">
                <Link to="/auth/login"><span className="spanTitle">Вход</span></Link>
              </Button>
            </Col>
          </Row>
          {children}
        </Card>
        </div>
      </Container>
    </>
  );
}
