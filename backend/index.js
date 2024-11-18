const express = require('express')

const arrivalRoutes = require('./routes/arrival')

const app = express()
const port = 8080

app.use(express.json())
app.use('/arrival', arrivalRoutes)


app.listen(port, () => {
    console.log("Server running in port", port)
})