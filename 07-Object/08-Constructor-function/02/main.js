function Accmulator(startingValue){
    this.currentValue = startingValue;
    
    
    this.show = function(){
        alert(this.currentValue);
    };
    this.read = function(){
        let input = +prompt("Enter Number")
        this.currentValue += this.input;
    };
    
}

const acc1 = new Accmulator(0)
const acc2 = new Accmulator(5)
const acc3 = new Accmulator(37)

acc1.read(7)
acc1.read()

console.log(acc1)
console.log(acc2)
console.log(acc3)