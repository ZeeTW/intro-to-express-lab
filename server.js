const express = require('express')

const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]
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
app.get('/collectibles/:index', (req, res) => {
  if (
    isNaN(`${req.params.index}`) ||
    req.params.index < 0 ||
    req.params.index >= collectibles.length
  ) {
    res.send('<h1>This item is not yet in stock. Check back soon!</h1>')
  } else {
    const item = collectibles[req.params.index]
    res.send(
      `<h1>So, you want the ${item.name}? For ${item.price}, it can be yours!</h1>`
    )
  }
})

//shoes
app.get('/shoes', (req, res) => {
  if (req.query['min-price']) {
    shoes = shoes.filter((shoe) => shoe.price >= +req.query['min-price'])
  }
  if (req.query['max-price']) {
    shoes = shoes.filter((shoe) => shoe.price >= +req.query['max-price'])
  }
  if (req.query.type) {
    shoes = shoes.filter((shoe) => shoe.type === req.query.type)
  }

  res.send(shoes)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
