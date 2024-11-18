function arrivalCounter(req, res) {
    let arrivalTimes = res.locals.arrivalTimes ?? []
    let timeIntervals = res.locals.timePortions ?? []

    arrivalTimes = arrivalTimes.map(parseFloat);
    timeIntervals = timeIntervals.map(parseFloat);

    const structuredData = [];
    let totalCount = 0;
    let arrivalIdx = 0;

    for (const interval of timeIntervals) {
        let count = 0;

        while (arrivalIdx < arrivalTimes.length && arrivalTimes[arrivalIdx] <= interval) {
            count++;
            arrivalIdx++;
        }

        totalCount += count;
        structuredData.push([interval, totalCount]);
    }

    res.send({
        success: true,
        data: structuredData,
        message: 'Arrival data generated successfull'
    });
}

module.exports = {arrivalCounter}
