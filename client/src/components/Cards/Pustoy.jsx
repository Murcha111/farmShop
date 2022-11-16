import axios from 'axios';
import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EDIT_CARD } from '../../redux/types';
import style from './styles/style.module.css'


export default function Pustoy({setShow, myid, modalId, setModalId}) {
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const { auth } = useSelector((state) => state);
 const navigate = useNavigate()
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
console.log(myid, 'myid');
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
    // console.log('11111111');
    const data = new FormData();
    data.user_id = auth.id;
    data.append("title", inputs.title);
    data.append("img", file);
    data.append("id", modalId)
    data.append("price", inputs.price);
    data.append("about", inputs.about);
    data.append("location", inputs.location);
    data.append("category", inputs.category);
    data.append("quantity", inputs.quantity);
    data.append("quantity_id", inputs.quantity_id);
    data.append("contacts", inputs.contacts);
    axios.patch("http://localhost:3001/autorCardsEdit", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) =>  
    dispatch({
      type: EDIT_CARD,
      payload: res.data
    }));
    closeModal ()
  };


 
  const [quantity, setQuantity] = useState("");
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };


  const closeModal =() => {
    setShow(false)
    setModalId(null)
    navigate('/user/cabinet/menu/cards')
  }
  return (
    <div className={style.inputTest}>
     
      <Form className="d-flex flex-column" onSubmit={submitHandler}>
          <FormControl
            type="text"
            name="title"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Название"
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
            <option value="1">Овощи</option>
            <option value="2">Запчасти</option>
            <option value="3">Колеса</option>
            <option value="4">Спецтехника</option>
            <option value="5">Продукты пчеловодства</option>
            <option value="6">Сыры</option>
            <option value="7">Мясная продукция</option>
            <option value="8">Вино</option>
            <option value="9">Молочная продукция</option>
            <option value="10">Оборудование</option>
            <option value="11">Вывоз мусора</option>
            <option value="12">Услуги ветеринаров</option>
            <option value="13">Услуги по доставке</option>
            <option value="14">услуги по обработке земли</option>
            <option value="15">Ремонт ТС</option>
            <option value="16">Новости</option>
            <option value="17">Масла</option>
            <option value="18">Полезное</option>
          </Form.Select>

          <FormControl
            type="number"
            name="quantity"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Количество"
          />

          <Form.Select
            type="number"
            value={inputs.quantity_id}
            name="quantity_id"
            onChange={inputHandler}
            className="form-select"
          >
            <option value="1">Кг</option>
            <option value="2">Тонн</option>
            <option value="3">Литр</option>
            <option value="4">Шт</option>
          </Form.Select>

          <FormControl
            type="text"
            name="about"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Описание"
          />

          <FormControl
            type="text"
            name="location"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Введите населенный пункт"
          />

          <FormControl
            type="text"
            name="price"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Цена"
          />

          <FormControl
            type="text"
            name="contacts"
            onChange={inputHandler}
            id="disabledTextInput"
            className="form-control"
            placeholder="Контактный телефон"
          />

          <button
            type="submit"
            onClick={submitHandler}
            className="btn btn-light"
          >
            добавить
          </button>
          <button type="submit" onClick={closeModal} className="btn btn-dark">
            отмена
          </button>
        </Form>
    </div>
  )
}
