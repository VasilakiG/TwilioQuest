class Materializer{
    
    constructor(targetName){
        this.target = targetName;
        this.activated = false;
    }

    activate(){
        return this.activated = true
    }

    materialize(){

        if(this.activated === true){
            return this.target
        }
        if(this.activated = false){
            return this.target = undefined
        }
        
    }
}

const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"