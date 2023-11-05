function Calculator(){
    this.total = 0;
}


Calculator.prototype.add = function(number){
    return (this.total = this.total + number) ;
}

Calculator.prototype.subtract = function(number){
    return (this.total -= number);
}

Calculator.prototype.multiply = function(number){
    return (this.total *= number);
}
 
Calculator.prototype.divide = function(number){
    if (number !== 0){
        this.total /= number;
        return this.total;}
        else{
            return "Cannot divide by zero";
        }
    }