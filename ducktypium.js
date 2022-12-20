class Ducktypium{

    calibrationSequence = []

    constructor(color){

        if(color !== "red" && color !== "blue" && color !== "yellow"){
            throw new Error("Color must be red, yellow, or blue!")
        }

        try{

            this.color = color

        }catch(err){

            console.log( "Color Error: " + err.message )

        }
        
    }

    refract(color){
        
        try{

            if(color === "red" && this.color === "blue"){
                return "purple"
            }else if(color === "red" && this.color === "yellow"){
                return "orange"
            }else if(color === "red" && this.color === "red"){
                return color
            }else if(color === "yellow" && this.color === "blue"){
                return "green"  
            }else if(color === "yellow" && this.color === "red"){
                return "orange"
            }else if(color === "yellow" && this.color === "yellow"){
                return color
            }else if(color === "blue" && this.color === "red"){
                return "purple"
            }else if(color === "blue" && this.color === "yellow"){
                return "green"
            }else if(color === "blue" && this.color === "blue"){
                return color
            }

        }catch(err){

            console.log( "Color Error: " + err.message )

        }
    }

    calibrate(inputArray){

        this.calibrationSequence = inputArray.sort( (a, b) => a - b ).map( item => item * 3 )

        return this.calibrationSequence
    }

}

try {

    const badColor = new Ducktypium("pink");

} catch (e) {

    console.log("Color must be red, yellow, or blue!");

}
  
  // Create a new instance of the class
  const dt = new Ducktypium("red");
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract("blue")); // prints 'purple'
  console.log(dt.refract("red")); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence);