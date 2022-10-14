const express = require('express');
const bodyparser = require('body-parser')
const categoryRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/product.routes')
const authRoutes = require('./routes/auth.routes')
const  {PORT} = require('./config/serverConfig')
const app = express();
app.use(bodyparser.urlencoded({extended: true}))
const {Op} = require('sequelize');
const { User,Role,sequelize } = require('./models/index');

// app.get('/home',(req,res)=>{
//     res.send("Welcome to our home page");
// })
// require('dotenv').config()
// console.log(process.env.S3_BUCKET)
// console.log(process.env.SECRET_KEY)

categoryRoutes(app);
productRoutes(app);
authRoutes(app);

app.listen(PORT,async()=>{
    await sequelize.sync();//this is to sync all the models thorough the table
    //which is user_roles
    // const myUser = await User.create({
    //     username : "santosh2510",
    //     email : "santosh22@gmail.com",
    //     password : "santoshyeshu"
    // })
    
    // const adminRole = await Role.findOne({
    //     where:{
    //         name : 'admin'
    //     }
    // })
    
    // const response = await myUser.addRole(adminRole);
    const myResponse = await User.findOne({
        where : {
            username : 'santosh2510'
        },
        raw : true,
        nest : true,
        include : Role
    })
    console.log(myResponse);

    console.log('server is listening to this port : ',PORT);
});