const express = require('express');
const router = express.Router();
const fileMiddleware = require("../middlewares/upload");
const {
  userCards,
  userInfo,
  userDetailCard,
  addFavouriteCard,
  deleteFavourite,
  removeCard
} = require("../controllers/usersController");
router
  .route('/user/:id')
  .get(userInfo);

router
  .route('/cabinet/cards/:id')
  // .get(userCards)
  .delete(removeCard);

router
  .route('/cabinet/favouritecards')
  .post(addFavouriteCard);
  
  router
  .route('/userDetailCard/:id')
  .post(fileMiddleware.single('avatar'),userDetailCard);

router
  .route('/cabinet/favouritecards/:id')
  .delete(deleteFavourite);

  

  module.exports = router;
