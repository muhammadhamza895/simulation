function divideSimulationTime(req, res, next) {
    const { simulationTime, numberOfPortions = 6 } = req.body

    const singleTimePortion = simulationTime / numberOfPortions;
    const timePortions = [];

    for (let portionNumber = 1; portionNumber <= numberOfPortions; portionNumber++) {
        timePortions.push((portionNumber * singleTimePortion).toFixed(2));
    }

    res.locals.timePortions = timePortions
    next()
}

module.exports = {divideSimulationTime}