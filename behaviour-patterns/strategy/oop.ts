class MathCommand {
    constructor(private a: number, private b: number, private operation: IMathOperation) { }

    execute() {
        return this.operation.operate(this.a, this.b);
    }
}

interface IMathOperation {
    operate(a: number, b: number): number;
}

class AddOperation implements IMathOperation {
    operate(a: number, b: number) {
        return a + b;
    }

}

class SubOperation implements IMathOperation {
    operate(a: number, b: number) {
        return a - b;
    }

}

const addCommand = new MathCommand(2, 3, new AddOperation());
const subCommand = new MathCommand(5, 3, new SubOperation());
console.log('2 + 3 = ', addCommand.execute());
console.log('5 - 3 = ', subCommand.execute());
