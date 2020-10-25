const express = require("express");
const cors = require('cors')
const bodyParse = require('body-parse');
app.use(bodyParse.json)
const app = express();

app.use(cors())

const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage]


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});


app.get('/messages/:id',(req,res)=>{
 let id = Number(req.params.id)
 let messageById = messages.find(message=>message.id===id)
  res.json(messageById);
})

app.post('/messages',(req,res)=>{
 let newMessage = req.body;
  messages.push(newMessage)
  
  res.send('messages');
})







app.listen(process.env.PORT);
