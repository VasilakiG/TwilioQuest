class TargetingSolution{

    constructor({x, y, z}){
        this.x = x
        this.y = y
        this.z = z
    }

    target(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }
}

const m = new TargetingSolution({x:10, y:15, z:900});
  
console.log(m.target());