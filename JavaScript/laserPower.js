function calculatePower(powerSettings){
    let totalPower = 0

    totalPower = powerSettings.map(item => item*2).reduce((sum, current) => sum + current, 0)

    return totalPower
}

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower);