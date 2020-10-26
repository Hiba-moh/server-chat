const express = require("express");
const cors = require('cors')
let i=0;
const app = express();
const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded());
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

app.get('/messages',(req,res)=>{
  res.json(messages);
})


app.get('/messages/:id',(req,res)=>{
 let id = Number(req.params.id)
 let messageById = messages.find(message=>message.id===id)
  res.json(messageById);
})

app.post('/messages',(req,res)=>{
 let newMessage = req.body;
  newMessage.id = ++i;
  messages.push(newMessage);
  res.send('one message added')
})

app.delete('/messages/delete/:id', (req, res) => {
    const { id } = req.params
 messages.forEach(e => {
        if (e.id == id) {
            messages.splice(e, 1)
        }
   
    res.send("Person deleted");
  res.json(messageById);
  
})


app.listen(process.env.PORT);
