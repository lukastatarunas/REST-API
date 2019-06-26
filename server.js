const express = require('express')
const request = require('request')

const app = express()

app.get('/api/v1/lrtlive',  (req, res) => {
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Headers', 'x-requested-with, x-requested-by')
  request(`https://www.lrt.lt/static/tvprog/tvprog.json`,  (error, response, body) => {
      if(error) res.send('Error occured while fetching LRT data!')
      else res.send(body)
  })
})

app.listen(process.env.PORT || 5500, () => {
	console.log(`app is running on port ${process.env.PORT}`)
})