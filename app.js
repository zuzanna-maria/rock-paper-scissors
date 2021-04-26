const express = require('express')
const app = express()
const port = 3000
const Battle = require('./battle.js')
const Player = require('./player.js')
const battle = new Battle()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')

})

app.post('/name', (req, res) => {
  console.log("test 1")
  const player1 = new Player(req.body.name)
  battle.add(player1)
  res.render('name.ejs', {
    name: battle.currentPlayer()
  })
})

app.post('/name', (req, res) => {
  console.log("test")
  res.render('name.ejs', {
    name: battle.currentPlayer()
  })
})

app.get('/rock', (req, res) => {
  console.log(battle.currentPlayer())
  const opponentMove = battle.generateResponse()
  res.render('rock.ejs', {
    name: battle.currentPlayer(),
    opponentMove: opponentMove,
    evaluation: battle.evaluateTurn("rock", opponentMove)
  })
})

app.get('/paper', (req, res) => {
  const opponentMove = battle.generateResponse()
  res.render('paper.ejs', {
    name: battle.currentPlayer(),
    opponentMove: opponentMove,
    evaluation: battle.evaluateTurn("paper", opponentMove)
  })
})



app.get('/scissors', (req, res) => {
  const opponentMove = battle.generateResponse()
  res.render('scissors.ejs', {
    name: battle.currentPlayer(),
    opponentMove: opponentMove,
    evaluation: battle.evaluateTurn("scissors", opponentMove)

  })
})



app.listen(port, () => {
  console.log("detects port request")
})
