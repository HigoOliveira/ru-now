const express =  require('express');
const router = express.Router();
const mongoose = require('mongoose');

const MeatVote = mongoose.model('MeatVote', {
  vote: Boolean,
  userId: String,
  date: Date
})

router.get('/vote', (req, res) => {
  // receber parametros: vote, userId, date
  // salvar num modelo de Line
  const q = req.query
  //console.log(q);
  const vote = new MeatVote({
    vote: q.vote,
    userId: q.userId,
    date: Date.now(),
  });

  var error = false;

  vote.save((err) => {
    if (err) {
      console.log("Erro voteLine.save", err);
      error = true;
    }
  });
  //res.status(200).json({res: error})
  res.redirect('http://localhost:3000/ru');
})

router.get('/', (req, res) => {
  const query = MeatVote.find({})
  var myData = [];
  query.exec((err, data) => {
    if(err) {
      console.log("ERROR ON LINES GET", err);
    }
    data.map((item, key) => {
      myData.push({ userId: item.userId, vote: item.vote, date: item.date })
    });  
    res.status(200).json(myData)
    console.log(myData);
  })
  
  //res.status(200).send("Oi"+myData)
})

module.exports = router;