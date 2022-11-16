import UserCabinet from "./UserCabinet";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./infoUser.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl } from "react-bootstrap";
import { AddressSuggestions, FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

export default function InfoUser() {
  const [userInfo, setUserInfo] = useState([]);
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [showns, setShowns] = useState(false);
  const { auth } = useSelector((state) => state);
  const [nameAll, setNameAll] = useState();
  const [adress, setAdress] = useState();
  const my_token = "57062459bf6d59a734a9500f535bbd0bb2f967a8";
  useEffect(() => {
    if (auth.id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/user/${auth.id}`)
        .then((res) => setUserInfo(res.data));
    }
  }, [auth.id, avatar]);
  console.log(img);
  const sendAvatar = useCallback(async () => {
    console.log(img);
    try {
      const data = new FormData();

      data.append("avatar", img);
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/userDetailCard/${auth.id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => setAvatar(res.data.path));
    } catch (err) {
      console.log(err);
    }
  }, [img]);

  return (
    <>
      <UserCabinet>
        <div className="info_cont">
          <div className="avatarWrapper">
            <label className="avatar" htmlFor="avatar">
              {userInfo?.ava?.image ? (
                <img className="logo" src={userInfo?.ava?.image} alt="avatar" />
              ) : (
                <img className="logo" src={`/ava.jpg`} alt="avatar" />
              )}
            </label>

            <div className="mb-3">
              <input
                type="file"
                id="avatar"
                className="visually-hidden"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <button onClick={sendAvatar} className="btnUpload">
              Изменить аватар
            </button>
          </div>

          <div className="userInfo">
            <ul className="category-list">
              <li>
                <p>Имя : {userInfo?.user?.name} </p>
              </li>
              <li>
                <p>E-mail : {userInfo?.user?.email} </p>
              </li>
              <li>
                <p>
                  Контакты :{" "}
                  {userInfo?.result?.contacts
                    ? userInfo?.result?.contacts
                    : "Заполните контактную информацию  "}{" "}
                </p>
              </li>
              <li>
                <p>
                  Информация :{" "}
                  {userInfo?.result?.status
                    ? userInfo?.result?.status
                    : "Заполните информацию о вашей деятельности"}
                </p>
              </li>
              <li>
                <p>
                  Адрес :{" "}
                  {userInfo?.result?.location
                    ? userInfo?.result?.location
                    : "Заполните ваше текущее местонахождение"}
                </p>
              </li>
            </ul>
            <button onClick={() => setShowns(true)} className="btnUpload">
              Изменить данные
            </button>
          </div>
          <Modal
            show={showns}
            onHide={() => setShowns(false)}
            dialogClassName="modal-110w"
            aria-labelledby="example-custom-modal-styling-title"
            className="Modal12"
          >
            <div className="Modal12">
              <br />
              <Form className="d-flex flex-column">
                <FioSuggestions
                  token={my_token}
                  value={nameAll}
                  onChange={setNameAll}
                />
                Введите ИФО
                {/* <FormControl
          type="text"
          name="title"
          // onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder= {`${userInfo?.user?.name}`}
        /> */}
                <br></br>
                <FormControl
                  type="text"
                  name="about"
                  // onChange={inputHandler}
                  id="disabledTextInput"
                  className="form-control"
                  placeholder={`${userInfo?.result?.contacts}`}
                />
                <br></br>
                <FormControl
                  type="text"
                  name="location"
                  // onChange={inputHandler}

                  id="disabledTextInput"
                  className="form-control"
                  placeholder={`${userInfo?.result?.status}`}
                />
                <br></br>
                <AddressSuggestions
                  token={`${my_token}`}
                  onChange={setAdress}
                />
                Введите адрес
                <br></br>
                <br></br>
                <button
                  type="submit"
                  // onClick={submitHandler}
                  className="btn btn-light"
                >
                  сохранить
                </button>
                <br></br>
                <button type="submit" className="btn btn-dark">
                  отмена
                </button>
              </Form>
            </div>
            <br />
            <br />
          </Modal>
        </div>
      </UserCabinet>
    </>
  );
}

//
// useEffect(() => {
//   if (auth.id) {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/users/user/${auth.id}`)
//       .then((res) => setUserInfo(res.data));
//   }
// }, [auth.id]);
