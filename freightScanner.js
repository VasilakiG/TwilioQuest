function scan(freightItems){
    let count = 0

    freightItems.forEach(element => {
        if(element === "contraband"){
            count += 1;
        }
    });

    return count;
}