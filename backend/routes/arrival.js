const express = require('express')
const router = express.Router()

// HELPERS
const { generatePoissonArrivals } = require('../helpers/arrivals')
const { divideSimulationTime } = require('../helpers/simulation')

// CONTROLLERS
const { arrivalCounter } =  require('../controllers/arrival')

router.post('/get-arrival-graph-data', generatePoissonArrivals, divideSimulationTime, arrivalCounter)

module.exports = router