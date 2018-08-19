interface IMathCommand {
    execute(): number;
}

interface IOperationTwoNums {
    operation(a: number, b: number): number;
}

class SummOperation implements IOperationTwoNums {
    operation(a: number, b: number): number {
        return a + b;
    }
}

class SummCommand implements IMathCommand {
    constructor(private reciever: IOperationTwoNums, private a: number, private b: number) { }

    execute(): number {
        return this.reciever.operation(this.a,this.b);
    }
}

const command = new SummCommand(new SummOperation(), 2, 3);
console.log(command.execute());