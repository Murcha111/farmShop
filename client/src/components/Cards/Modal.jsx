import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CloneCardForm from "../CloneCardForm";
import "./styles/modal.css"

export default function Modal({ active, setActive, id }) {
  const Dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const { auth } = useSelector((state) => state);
  // console.log(auth.id);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

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
    console.log(id, 'ID 17 Modal');
    const data = new FormData();
    data.user_id = auth.id;
    data.append("title", inputs.title);
    data.append("img", file);

    data.append("price", inputs.price);
    data.append("about", inputs.about);
    data.append("location", inputs.location);
    data.append("category", inputs.category);
    data.append("quantity", inputs.quantity);
    data.append("quantity_id", inputs.quantity_id);
    data.append("contacts", inputs.contacts);
    axios.patch("http://localhost:3001/cards/edit", {data, id}, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const [quantity, setQuantity] = useState("");
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    // <div
    //   className={active ? "modal active" : "modal"}
    //   onClick={() => setActive(false)}
    // >
    //   <div
    //     className={active ? "modal_content.active " : "modal_content"}
    //     onClick={(e) => e.stopPropagation()}
    //   >
    <div>
      <div>
        <Form className="d-flex flex-column" onSubmit={submitHandler}>
          <FormControl
            type="text"
            name="title"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="????????????????"
          />

          <FormControl
            onChange={handleFile}
            type="file"
            className="form-control"
            placeholder="Disabled input"
          />
          <Form.Select
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

          <FormControl
            type="number"
            name="quantity"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="????????????????????"
          />

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

          <FormControl
            type="text"
            name="about"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="????????????????"
          />

          <FormControl
            type="text"
            name="location"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="?????????????? ???????????????????? ??????????"
          />

          <FormControl
            type="text"
            name="price"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="????????"
          />

          <FormControl
            type="text"
            name="contacts"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="???????????????????? ??????????????"
          />

          <button
            type="submit"
            onClick={submitHandler}
            className="btn btn-primary"
          >
            ????????????????
          </button>
          <button type="submit" className="btn btn-dark">
            ????????????
          </button>
        </Form>
      </div>
    </div>
  );
}
