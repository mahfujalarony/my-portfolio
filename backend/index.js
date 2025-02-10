const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors())


const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);


app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });

  try {
    await newMessage.save();
    res.status(201).send('Message saved successfully');
  } catch (err) {
    res.status(500).send('Error saving message');
  }
});

module.exports = app;