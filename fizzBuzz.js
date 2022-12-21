const inputNumber = Number(process.argv[2])
let output = '';

let one = inputNumber%3 == 0;
let two = inputNumber%5 == 0

if(one){
    output += 'Java'
}
if(two){
    output += 'Script'
}
if(!one && !two){
    output += String(inputNumber)
}


// switch(inputNumber){
//     case (one):
//         output += 'Java'
//         break;
//     case (two):
//         output += 'Script'
//         break;
//     default:
//         output = String(inputNumber)
//         break;
// }

console.log(output)