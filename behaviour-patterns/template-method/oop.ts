interface ISimpleMathOperation {
    operation(a: number, b: number): number;
}

class AddMathOperation implements ISimpleMathOperation {
    operation(a: number, b: number): number {
        return a + b;
    }
}

class SubMathOperation implements ISimpleMathOperation {
    operation(a: number, b: number): number {
        return a - b;
    }
}

console.log('2 + 3 = ', new AddMathOperation().operation(2, 3));
console.log('5 - 3 = ', new SubMathOperation().operation(5, 3));