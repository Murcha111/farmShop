const express = require('express');
const router = express.Router();
const {
  isValid
} = require('../middlewares/authMiddleware')



const {
  registration,
  login,
  check
  
} = require("../controllers/authController");


router
  .route('/register')
  .post(registration);

router
  .route('/login')
  .post(login);

  router
  .route('/')
  .get(isValid, check)
  




module.exports = router;
