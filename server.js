const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')



app.use(cors())


//Create Routes
app.get('/', async(req, res) =>{

    try {
         //Response is the response from Axios, but i get from his the data! 
  const {data} =   await axios('https://jsonplaceholder.typicode.com/users')
  //console.log(data)
  return res.json(data)

    } catch (error){
        console.error(error)
    }

  


    //return res.json([
        //{name: 'Jeff'},
      //  {name: 'Thiago'}
    //])
})


//port to listenin
app.listen('4567')
