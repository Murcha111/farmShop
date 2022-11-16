const { User,Card ,Favourite,Avatar,User_detail} = require("../db/models");

exports.addFavouriteCard = async(req,res) => {
  //console.log(req.body)
  const {user_id,card_id} = req.body
  //console.log(user_id,card_id,'=======================.')
  try {
  //   const favourite = await Favourite.findOne({ where: {card_id},raw:true });
  //   console.log(candidate,'19saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!')
  //  if (favourite) {
  //    return res.json({fawor:false ,massage:'Уже в избранном'})
  
  // } else {
      const newFaw = await Favourite.create({user_id,card_id});
     // console.log(newFaw,'newFaw<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>> .dataValues.id')
     //  const result = await Favourite.findOne({ where: {},raw:true });
     // console.log({...newFaw.dataValues,fawor:true ,massage:'Добавлено в избранное'})
      res.json({...newFaw.dataValues,massage:'Добавлено в избранное',fawor:true})
   // }
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

exports.userDetailCard =  async(req,res) => {
  console.log('===========!!!',req.file?.filename)

  // if(req.file?.filename){
  //   const image = 'http://localhost:3001/images/' + req.file.filename;
  // } else {
  //   const image = `/ava.jpg`
  // }
  
  console.log(req.params,'nnnnnnnnnnnuuuuuuuuuuuuuuu```````````````')
  try {
    const newAvatar = await Avatar.create({
    image:'http://localhost:3001/images/' + req.file?.filename,
  });
  const newId = newAvatar.dataValues.id
  // const checkUserDet = await User_detail.findOne({where:})
  const userDetaleAvatarEdit = await User_detail.update({ avatar_id: newId },{where:{user_id:req.params.id}});
  console.log(userDetaleAvatarEdit,"hhhhhhhhhhhhuuuuuuuuuasncuascnuascusacn")

  res.status(201).json(req.file);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(406);
  }
}
  
  


exports.deleteFavourite = async(req,res) => {
  const {id} = req.params
  try {
    const result = await Favourite.destroy({where : {card_id:id}})
  // console.log(result,'=======================' )
   res.json({fawor:false ,massage:'Удалено из избранное',id})
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

exports.removeCard = async(req,res) => {
  const {id} = req.params
  console.log(id)
  try {
   await Favourite.destroy({where : {card_id:id}});
   const result = await Card.destroy({where : {id}});
  // console.log(result,'=======================' )
   res.json({massage:'Карта удалена',id});
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

exports.userInfo = async(req, res) => {
  let result;
  const {id} = req.params
  try {
    result = await User_detail.findOne({where:{user_id : id},raw:true})
    console.log(result,'<<<<<<<<<<<<<<<<<')
    if(!result){
      console.log("?????????????????")
      result = await User_detail.create({user_id : id,avatar_id:4,location:null,contacts:null, status:null})
    }
    const user = await User.findOne({where:{id : result.user_id },raw:true})
      const mid = result.avatar_id
      const ava = await Avatar.findOne({where:{id:mid},raw:true});
      // avatar_id: DataTypes.INTEGER,
      // location: DataTypes.STRING,
      // contacts: DataTypes.STRING,
      // status: DataTypes.STRING
    
    res.json({result,ava,user})
  
   
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

// const result = await User_detail.findOne({where:{user_id : id},raw:true})
// const user = await User.findOne({where:{id : result.user_id },raw:true})
//   const mid = result.avatar_id
//   const ava = await Avatar.findOne({where:{id:mid},raw:true});
// res.json({result,ava,user})
// exports.userInfo = async(req, res) => {

//   const {id} = req.params
//   try {
//     const result = await User.findByPk(id)
//     console.log(result)
//    res.json(result)
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500)
//   }
// }



// exports.userCards = async(req, res) => {
//  // console.log(req.params)
//   const {id} = req.params
//   try {
//     const result = await Card.findAll({where: {user_id: id}, raw: true})
//    res.json(result)
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500)
//   }
// }





