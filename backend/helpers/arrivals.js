function generatePoissonArrivals(req, res, next) {
    const { lambda, simulationTime } = req.body

    const arrivalTimes = [];
    let currentTime = 0;

    while (currentTime < simulationTime) {
        const interarrivalTime = Math.random() / lambda;

        currentTime += interarrivalTime;

        if (currentTime < simulationTime) {
            arrivalTimes.push(currentTime.toFixed(2));
        }
    }

    res.locals.arrivalTimes = arrivalTimes;
    next()
}


module.exports = { generatePoissonArrivals }