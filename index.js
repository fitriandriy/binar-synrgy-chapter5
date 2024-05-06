const express = require('express')
const app = express()
const PORT = 9000

const Router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(Router)

app.set('view engine', 'ejs')

app.listen(PORT, () => {console.log(`Server running in port ${PORT}`)})