const express = require('express')
var cors = require('cors')

const arrivalRoutes = require('./routes/arrival')

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use('/arrival', arrivalRoutes)


app.listen(port, () => {
    console.log("Server running in port", port)
})