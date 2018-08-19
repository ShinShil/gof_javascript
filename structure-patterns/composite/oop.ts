interface ISubExpression {
    getValue(): number;
    getSubExpression(index: number): ISubExpression;
    add(expression: ISubExpression);
    sub(expression: ISubExpression);
}

class IntegerValue implements ISubExpression {

    constructor(private _value: number) { }

    getValue() {
        return this._value;
    }

    getSubExpression(index: number): ISubExpression {
        throw new Error("Method not implemented.");
    }
    add(expression: ISubExpression) {
        throw new Error("Method not implemented.");
    }
    sub(expression: ISubExpression) {
        throw new Error("Method not implemented.");
    }
}

class SubExpression implements ISubExpression {
    private expressions: ISubExpression[];
    constructor(...expressions: ISubExpression[]) {
        this.expressions = expressions;
    }
    getValue(): number {
        let result = 0;
        this.expressions.forEach(subExpression => result += subExpression.getValue());
        return result;
    }
    getSubExpression(index: number): ISubExpression {
        return this.expressions[index];
    }
    add(expression: ISubExpression) {
        this.expressions.push(expression);
    }
    sub(expression: ISubExpression) {
        this.expressions.push(new IntegerValue((-1) * expression.getValue()));
    }
}

class PrimitiveExpressionBuilder {
    public static getExpression(...values: number[]) {
        return new SubExpression(...values.map(value => new IntegerValue(value)));
    }

}

class ComplexExpressionBuilder {
    public static getExpression(...expressions: ISubExpression[]) {
        return new SubExpression(...expressions);
    }
}

console.log('Count: 20 - (5-2) - (11+6)')
const expression = PrimitiveExpressionBuilder.getExpression(20);
const a = PrimitiveExpressionBuilder.getExpression(5, -2);
const b = PrimitiveExpressionBuilder.getExpression(11, 6);
expression.sub(a);
expression.sub(b);
console.log('result: ', expression.getValue());
console.log('=========');
console.log('count:  20 - 5 + 6 - (2+3+4+5)');
const expression2 = PrimitiveExpressionBuilder.getExpression(20, -5, 6);
expression2.sub(PrimitiveExpressionBuilder.getExpression(2, 3, 4, 5))
console.log('result: ', expression2.getValue());