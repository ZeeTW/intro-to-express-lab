const express = require('express')

const app = express()

//routes

//username
app.get('/greetings/:username', (req, res) => {
  res.send(
    `<h1>What a delight it is to see you once more, ${req.params.username}</h1>`
  )
})

//rolling the dice
app.get('/roll/:dice', (req, res) => {
  if (isNaN(`${req.params.dice}`)) {
    res.send('<h2>You must specify a number</h2>')
  } else {
    // res.send(`<h1>You rolled a ${req.params.dice}</h1>`)
    res.send(
      `<h1>You rolled a ${Math.floor(
        Math.random() * (req.params.dice + 1)
      )}</h1>`
    )
  }
})

//collectibles

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
