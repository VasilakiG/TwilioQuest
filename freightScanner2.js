function scan(freightItems){
    let count = []
    let i = 0

    freightItems.forEach((element, index) => {
        if(element === "contraband"){
            count[i++] = index
        }
    });
    
    return count;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]