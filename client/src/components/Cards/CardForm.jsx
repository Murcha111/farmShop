import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

import "./styles/CardForm.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";


export default function CardForm() {
  const Dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate()
  // console.log(auth.id);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const [inputs, setInputs] = useState({
    category: "1",
    quantity_id: "4",
  });

  const [file, setFile] = useState("");

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputs({
      category: "1",
      quantity_id: "4",
    });
    // navigate("/cards");
    // setFile("");

    const data = new FormData();
    data.append("user_id",auth.id);
    data.append("title", inputs.title);
    data.append("img", file);
    data.append("category", inputs.category);
    data.append("price", inputs.price);
    data.append("about", inputs.about);
    data.append("contacts", inputs.contacts);
    data.append("location", inputs.location);
    data.append("quantity", inputs.quantity);
    data.append("quantity_id", inputs.quantity_id);

    axios.post("http://localhost:3001/cardList", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) =>{ console.log(res, 'newCard 70')//иди в CLOONECARDFORM-она рабочая
    }
    );
  
  };

  // Dispatch({
  //   type: ADD_CARD,
  //   payload: res.data.newCard
  // })

 

  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="BoxForm"
        >
          <div className="inputsGroup">
            <FormControl
              onSubmit={submitHandler}
              encType="multipart/form-data"
              name="abc"
              sx={{ m: 1, minWidth: 420 }}
              
            >
              <div className="BoxForm">
                <TextField
                  className="inputField"
                  id="title"
                  label="название"
                  type="название"
                  name="title"
                  // value={inputTitle}
                  onChange={inputHandler}
                />
                <FormControl fullWidth>
                  <InputLabel
                    onChange={inputHandler}
                    id="demo-simple-select-label"
                  >
                    Категория
                  </InputLabel>
                  <Select
                    value={inputs.category}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    onChange={inputHandler}
                  >
                    <MenuItem value="1">Овощи</MenuItem>
                    <MenuItem value="2">Запчасти</MenuItem>
                    <MenuItem value="3">Колеса</MenuItem>
                    <MenuItem value="4">Спецтехника</MenuItem>

                    <MenuItem value="5">Продукты пчеловодства</MenuItem>
                    <MenuItem value="6">Сыры</MenuItem>
                    <MenuItem value="7">Мясная продукция</MenuItem>
                    <MenuItem value="8">Вино</MenuItem>
                    <MenuItem value="9">Молочная продукция</MenuItem>
                    <MenuItem value="10">Оборудование</MenuItem>
                    <MenuItem value="11">Вывоз мусора</MenuItem>
                    <MenuItem value="12">Услуги ветеринаров</MenuItem>
                    <MenuItem value="13">Услуги по доставке</MenuItem>
                    <MenuItem value="14">Услуги по обработке земли</MenuItem>

                    <MenuItem value="15">Тех. обслуживание транспорта</MenuItem>
                    <MenuItem value="16">
                      Новости в сфере Сельского хозяйства
                    </MenuItem>
                    <MenuItem value="17">Масла</MenuItem>
                    <MenuItem value="18">полезная информация</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" component="label" name="image">
                  Загрузить фотографию
                  <input onChange={handleFile} type="file" hidden />
                </Button>

                <TextField
                  className="inputField"
                  id="outlined-disabled"
                  label="цена"
                  type="цена"
                  autoComplete="цена"
                  name="price"
                  onChange={inputHandler}
                />
                <TextField
                  className="inputField"
                  id="outlined-disabled"
                  label="Количество"
                  type="number"
                  autoComplete="Количество"
                  name="quantity"
                  onChange={inputHandler}
                />
                <TextField
                  className="inputField"
                  fullWidth
                  label="описание"
                  name="about"
                  id="about"
                  onChange={inputHandler}
                />
                <Box sx={{ minWidth: 50 }}>
                  {/* <InputLabel id="demo-simple-select-label">количество</InputLabel> */}
                  <Select
                    sx={{ minWidth: 375 }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputs.quantity_id}
                    label="количество"
                    name="quantity_id"
                    onChange={inputHandler}
                  >
                    <MenuItem value="1">кг</MenuItem>
                    <MenuItem value="2">тонн</MenuItem>
                    <MenuItem value="3">литр</MenuItem>
                    <MenuItem value="4">шт</MenuItem>
                  </Select>
                </Box>
                <TextField
                  className="inputField"
                  id="outlined-disabled"
                  label="контакты"
                  name="contacts"
                  onChange={inputHandler}
                />
                <TextField
                  type="text"
                  // id="suggest1"
                  className="inputField"
                  // id="outlined-disabled"
                  label="Введите населенный пункт"
                  name="location"
                  onChange={inputHandler}
                />
                <Button
                  type="submit"
                  onClick={submitHandler}
                  variant="contained" >
                  Добавить
                </Button>
                <Button variant="outlined">Отмена</Button>
              </div>
            </FormControl>
          </div>
        </Box>
      </div>
    </>
  );
}
