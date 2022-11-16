import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Button, Form, FormCheck, FormControl } from "react-bootstrap";
import LoginWrap from "./LoginWrap";
import { useNavigate } from "react-router-dom";

export default function MainReg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameErr, setNameErr] = useState("Имя не может быть пустым");
  const [emailErr, setEmailErr] = useState("E-mail не должен быть пустым");
  const [passwordErr, setPasswordErr] = useState(
    "Пароль не должен быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (nameErr || emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameErr,emailErr, passwordErr]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;

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

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameErr("Имя должно состоять из боллее 3 символов");
      if (!e.target.value) {
        setNameErr("Имя не может быть пустым");
      }
    } else {
      setNameErr("");
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
    if (e.target.value.length < 3 || e.target.value.length > 14) {
      setPasswordErr("Пароль должен состоять из боллее 5 символов");

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
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
      //  console.log(res,'reeeeeeeeesREEEEG')
        if(res.data.message){
          setEmailErr(res.data.message)
        }
        const result = jwt_decode(res.data.token);
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "REG_AUTH",
          payload: result,
        });
        navigate("/");
      });
    // dispatch(registration(name,email,password))
  }

  return (
    <>
      <LoginWrap>
        <Form className="d-flex flex-column" onSubmit={submitHandler}>
          <FormControl
            value={name}
            name="name"
            className="mt-3"
            placeholder="ФИО"
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blurHandler(e)}
            />
            {nameDirty && nameErr && <p style={{ color: "red" }}>{nameErr}</p>}
          <FormControl
            value={email}
            name="email"
            type="email"
            className="mt-3"
            placeholder="E-mail"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
          {emailDirty && emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
          <FormControl
            value={password}
            type="password"
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
          <span className="mt-3">
            Нажимая на кнопку, вы соглашаетесь с политикой обработки
            конфидециальных данных
          </span>
          <Button disabled={!formValid} type="submit" className="mt-3 btn btn-dark">
            Продолжить
          </Button>
        </Form>
      </LoginWrap>
    </>
  );
}
