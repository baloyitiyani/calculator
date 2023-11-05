describe('calculator test', function(){
    it('should add two numbers', function(){
        const calculator = new Calculator();
        calculator.add(5);
        calculator.add(4)

        expect(calculator.total).toBe(9);
    });
    it("should subract two numbers", function(){
        const calculator = new Calculator();
        calculator.total = 50;

        calculator.subtract(15);

        expect(calculator.total).toBe(35);
    });

    it('should multiply two numbers', function(){
        const calculator =  new Calculator();
        calculator.total = 5;

        calculator.multiply(6);
        expect(calculator.total).toBe(30);

    });
    it('should divide two numbers', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.divide(5);
        expect(calculator.total).toBe(4);
    });
});