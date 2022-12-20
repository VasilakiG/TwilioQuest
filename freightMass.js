function calculateMass(freightItems){
    let totalMass = ''
    
    totalMass = freightItems.reduce((sum, current) => sum+current, '')
    totalMass = totalMass.length

    return totalMass
}

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log(mass);