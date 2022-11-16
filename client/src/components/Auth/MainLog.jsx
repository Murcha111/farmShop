import React, { useState,useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, Form, FormCheck, FormControl } from "react-bootstrap";
import LoginWrap from "./LoginWrap";

import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";




export default function MainLog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailErr, setEmailErr] = useState("E-mail не должен быть пустым");
  const [passwordErr, setPasswordErr] = useState(
    "Пароль не должен быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Неккоректный E-mail");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordErr("Пароль должен состоять из боллее 3 символов");

      if (!e.target.value) {
        setPasswordErr("Пароль не должен быть пустым");
      }
    } else {
      setPasswordErr("");
    }
  };


  function submitHandler(evt) {
    evt.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        if(res.data.message){
          setEmailErr(res.data.message)
        }
        const result = jwt_decode(res.data.token);
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "LOG_AUTH",
          payload: result,
        });
        navigate("/");
      });
    // dispatch(login(email, password));
  }







  return (
    <>
      <LoginWrap>
        <Form className="d-flex flex-column" onSubmit={submitHandler}>
          <FormControl
            value={email}
            className="mt-3"
            placeholder="E-mail"
            onChange={(e) => emailHandler(e)}
            name="email"
            onBlur={(e) => blurHandler(e)}
          />
          {emailDirty && emailErr && <p style={{ color: "red"}}>{emailErr}</p>}

          <FormControl
            type="password"
            value={password}
            className="mt-3"
            placeholder="Пароль"
            onChange={(e) => passwordHandler(e)}
            name="password"
            onBlur={(e) => blurHandler(e)}
          />
          {passwordDirty && passwordErr && (
            <p style={{ color: "red" }}>{passwordErr}</p>
          )}
          <FormCheck inline className="mt-3" label="Запомнить данные" />
          <span className="mt-3">Забыли пароль?</span>
          <Button disabled={!formValid} type="submit" className="mt-3 btn btn-dark">
            Войти
          </Button>
        </Form>
      </LoginWrap>
    </>
  );
}

