const express = require('express')
const app = express()
const PORT = 9000

const Router = require('./routes')

// biar kebaca body pakai jsonnya
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(Router)

app.listen(PORT, () => {console.log(`Server running in port ${PORT}`)})