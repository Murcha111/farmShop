import React,{ useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { AddressSuggestions  } from 'react-dadata';
import { Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ADD_CARD, EDIT_CARD } from "../redux/types";
import 'react-dadata/dist/react-dadata.css';
const my_token = "57062459bf6d59a734a9500f535bbd0bb2f967a8"

export default function CloneCardForm() {
  const Dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const [adress, setAdress] = useState();
  const maxNumber = 69;
  const { auth } = useSelector((state) => state);
  // console.log(auth.id);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
const navigate = useNavigate()
  const [inputs, setInputs] = useState({ category: "1", quantity_id: "4" });

  const [file, setFile] = useState("");

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(auth.id, 'auth.id');
    const data = new FormData();
    // data.user_id = auth.id;
    data.append("user_id", auth.id)
    data.append("title", inputs.title);
    data.append("img", file);
   
    data.append("price", inputs.price);
    data.append("about", inputs.about);
    data.append("location", adress.value);
    //data.append("location", inputs.location);
    data.append("category", inputs.category);
    data.append("quantity", inputs.quantity);
    data.append("quantity_id", inputs.quantity_id);
    data.append("contacts", inputs.contacts);
    axios.post("http://localhost:3001/cardList", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res, 'res'); 
    Dispatch({
      type: ADD_CARD,
      payload: res.data
    })});
     navigate('/user/cabinet/menu/cards')
  };

  const [quantity, setQuantity] = useState("");
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  // const closeModal =() => {
  //   setShow(false)
  //   setModalId(null)
  //   navigate('/user/cabinet/menu/cards')
  // }

  return (
    <div className="formContainer">
      <div className="formContainerItem"> 
        <Form className="d-flex flex-column" onSubmit={submitHandler}>
        
        <FormControl
          type="text"
          name="title"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="????????????????"
        />
<br></br>
        <FormControl
          onChange={handleFile}
          type="file"
          className="form-control"
          placeholder="Disabled input"
        />
        <br></br>
        <Form.Select
          // <label onChange={inputHandler} className="form-label">??????????????????</label>
          value={inputs.category}
          name="category"
          onChange={inputHandler}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="1">??????????</option>
          <option value="2">????????????????</option>
          <option value="3">????????????</option>
          <option value="4">??????????????????????</option>
          <option value="5">???????????????? ????????????????????????</option>
          <option value="6">????????</option>
          <option value="7">???????????? ??????????????????</option>
          <option value="8">????????</option>
          <option value="9">???????????????? ??????????????????</option>
          <option value="10">????????????????????????</option>
          <option value="11">?????????? ????????????</option>
          <option value="12">???????????? ??????????????????????</option>
          <option value="13">???????????? ???? ????????????????</option>
          <option value="14">???????????? ???? ?????????????????? ??????????</option>
          <option value="15">???????????? ????</option>
          <option value="16">??????????????</option>
          <option value="17">??????????</option>
          <option value="18">????????????????</option>
        </Form.Select>
        <br></br>
        <FormControl
          type="number"
          name="quantity"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="????????????????????"
        />
<br></br>
        <Form.Select
          type="number"
          value={inputs.quantity_id}
          name="quantity_id"
          onChange={inputHandler}
          className="form-select"
        >
          <option value="1">????</option>
          <option value="2">????????</option>
          <option value="3">????????</option>
          <option value="4">????</option>
        </Form.Select>
        <br></br>
        <FormControl
          type="text"
          name="about"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="????????????????"
        />
<br></br>
        {/* <FormControl
          type="text"
          name="location"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="?????????????? ???????????????????? ??????????"
        /> */}
        <AddressSuggestions token={`${my_token}`}  onChange={setAdress} />?????????????? ??????????
<br></br>
        <FormControl
          type="text"
          name="price"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="????????"
        />
<br></br>
        <FormControl
          type="text"
          name="contacts"
          onChange={inputHandler}
          id="disabledTextInput"
          className="form-control"
          placeholder="???????????????????? ??????????????"
        />
     <br></br>
        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-light"
        >
          ????????????????
        </button>
        <br></br>
        <button type="submit" className="btn btn-dark">
          ????????????
        </button>
      </Form>
      </div>
     
      <div></div>
    </div>
  );
}
