const argumentValue1 = process.argv[2]
const argumentValue2 = process.argv[3]

const plantLifeStatus = Number(argumentValue1)
const plantDrynessLevel = Number(argumentValue2)

if( plantLifeStatus == 0 && plantDrynessLevel > 10 ){
    console.log('WATER')
}