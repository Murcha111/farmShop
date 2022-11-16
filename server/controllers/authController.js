const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id,name, email) => {
  return jwt.sign({ id,name, email}, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

exports.registration = async (req, res, next) => {
  //console.log(req.body)
  const { name, password, email } = req.body;
  if (!email || !password) {
    return res.json({message: 'Неккоректные данные ввода'})
   // return failAuth(res, 'Неправильное пароль-имя');
  }
  const candidate = await User.findOne({ where: { email } });
 // console.log(candidate,'19saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!')
  if (candidate) {
    
    return res.json({message: 'Пользователь с таким email уже существует'})
   // return failAuth(res, "Пользователь с таким email уже существует")
  }
  //console.log(candidate,'25saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!')
  try{
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name:name,email, password: hashPassword });
    const token = generateJwt(user.id,user.name, user.email);
    // console.log(token)
    return res.status(200).json({id: user.id,email: user.email,name: user.name , token });
    //return res.status(200).json({ token });
   } catch (err) {
     console.log(err.message);
     failAuth(res, err);
   }

};



exports.login = async (req, res, next) => {
  //console.log(req.body)
  const {email, password} = req.body
  try {
        const user = await User.findOne({where: {email}})
        if (!user) {
     //     console.log('111111')
          return res.json({message: 'Пользователь не найден'})
          //return failAuth(res, "Пользователь не найден")
        }
        let comparePassword = bcrypt.compare(password, user.password)
       // console.log(comparePassword)
        if (!comparePassword) {
        //  console.log('2222222222')
          return res.json({message: 'Неправильное пароль-имя'})
          //return failAuth(res, "Неправильное пароль-имя")
        }
        const token = generateJwt(user.id, user.name,  user.email)
    //    console.log("token",token)
        return res.json({token})
   } catch(err){
    console.log(err.message);
    failAuth(res, err);
  }
  
};
exports.check = async (req, res, next) => {
  try {
  const token = generateJwt(req.user.id, req.user.email)
//  console.log('aascacascasc',token)
  return res.json({token})
  } catch(err){
    console.log(err.message);
    failAuth(res, err);
  }
};



function failAuth(res, err) {
  return res.status(401).json({ err: err });
}

