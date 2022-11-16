require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");
const fileMiddleware = require("./middlewares/upload");
const path = require("path");
const { Card, Category, Quantity ,Favourite} = require("./db/models");



const app = express();

const PORT = process.env.PORT ?? 3002;



app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));



app.get("/cardList", async (req, res) => {
    const fav = await Favourite.findAll();
    //console.log(fav)
    const cards = await Card.findAll({ raw: true, include: {model: Quantity, attributes: ['quantity_title']} });
    //console.log(cards)
    for(let j = 0; j < cards.length;j++){
      for(let i = 0;i < fav.length;i++){
      if(cards[j].id === fav[i].card_id){
    cards[j].fa = true;
    break;

    } else {
      cards[j].fa = false;
    }
   }
  }
  res.json(cards);
});

// app.get("/cardList/:id", async (req, res) => {
//   const fav = await Favourite.findAll();
//   const cards = await Card.findAll({ raw: true, where:{} include: {model: Quantity, attributes: ['quantity_title']} });
//   for(let j = 0; j < cards.length;j++){
//     for(let i = 0;i < fav.length;i++){
//     if(cards[j].id === fav[i].card_id){
//   cards[j].fa = true;
//   break;
//   } else {
//     cards[j].fa = false;
//   }
//  }
// }
// res.json(cards);
// });
    



  app.post("/cardList",fileMiddleware.single('img'), async (req, res) => {
  // console.log('===========!!!',req.file?.filename)
  let image;
  if(req.file?.filename){
    image = 'http://localhost:3001/images/' + req.file.filename
  } else {
    image = 'https://st3.depositphotos.com/1152339/14206/i/600/depositphotos_142065916-stock-photo-marketing-concept-marketplace-on-wall.jpg'
  }
  
  const {
    title,
    user_id,
    price,
    about,
    quantity,
    quantity_id,
    contacts,
    category,
    location,
  } = req.body;

  if (title && price && about) {
    try {
      const newCard = await Card.create({
        title,
        user_id,
        price,
        image,
        about,
        contacts,
        category_id: category,
        location,
        quantity,
        quantity_id,
      });    
      const cardQuantity = await Quantity.findOne({where: {id: quantity_id }, raw: true})
      const  quant  = cardQuantity.quantity_title
      console.log(newCard, 'newCard102');
      res.status(201).json({newCard, quant });
    } 
    catch (error) {
      console.log(error.message);
      res.sendStatus(406);
    }
  }
});

app.get("/cards/detail/:id", async (req, res) => {
  try {
    const {id} = req.params
  //  console.log(req.params, 'req.body 29');
  const card = await Card.findOne({where: {id}, raw: true})
//  console.log(card, ' one card on server');
  res.json(card)
  
} catch (error) {
  console.log(error);
  res.sendStatus(500)
}
  
})

// 'http://localhost:3001/images/' + //удалено с image = req.file.filename
app.patch('/autorCardsEdit',fileMiddleware.single('img'), async (req, res) => {
  console.log(req.body, 'bbbbbbbbbback----------------------');
  console.log(req.file, '130 req file++++++++++++++++++++++++');
  let image;
  if(req.file?.filename){
    image = 'http://localhost:3001/images/' + req.file.filename
  } else {
    image = 'https://st3.depositphotos.com/1152339/14206/i/600/depositphotos_142065916-stock-photo-marketing-concept-marketplace-on-wall.jpg'
  }
  try {
    // const image = req.file.filename
    const {
      title,
      user_id,
      price,
      about,
      id,
      quantity,
      quantity_id,
      contacts,
      category,
      location,
    } = req.body;
  
   
    // console.log(editedCard, 'editedCard ');
    const editedCard = await Card.update({ 
        title: req.body.title,
        user_id: req.body.user_id,
        price: req.body.price,
        image: image,
        about: req.body.about,
        contacts: req.body.contacts,
        category_id: req.body.category,
        location: req.body.location,
        quantity: req.body.quantity,
        quantity_id: req.body.quantity_id
      },
      { where: { id }}
    );
     const newEditedCard = await Card.findOne({ where: { id }});
   console.log(newEditedCard,'33333 ==========================back');
    res.status(201).json(newEditedCard);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get("/allCategories", async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });

    res.json(categories);
  } catch (error) {
    res.sendStatus(500);
  }
});



app.get('/:id', async(req, res) => {
 
  const {id} = req.params
  
  try {
    const result = await Card.findAll({
      where: { category_id: id },
      raw: true,
    })

    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, async () => {
  console.log("Сервер слушает порт", PORT);
  try {
    await sequelize.authenticate();
    console.log("Подключение к БД успешно");
  } catch (error) {
    console.log("Не удалось подключиться к БД");
    console.log(error.message);
  }
});


