
const jwt = require('jsonwebtoken')

exports.isValid = (req, res, next) => {
   
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
           return res.json({message: "Пользователь не авторизованнннн"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
      console.log(e,'caaatch');
        res.status(401).json({message: "Пользователь не авторизован"})
    }
};
