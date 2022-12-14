class TargetingSolution{

    constructor(config){
        this.x = config.x
        this.y = config.y
        this.z = config.z
    }

    target(){
        console.log("(" + this.x + ", "+ this.y + ", " + this.z + ")")
    }
}