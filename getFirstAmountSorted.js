const inputArray = process.argv[2]
const inputNumber = Number(process.argv[3])

function getFirstAmountSorted(inputArray, inputNumber){
    inputArray.sort()
    inputArray.slice(1, inputNumber)

    return inputArray;
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);