interface IIterator<T> {
    next(): T;
    reset(): void;
    current(): T;
    isEnd(): boolean;
}

class FilterNumberIterator implements IIterator<number> {
    private currIndex: number = 0;
    private lastRes = null;

    constructor(private numbers: number[],
        private filter: (num: number) => boolean) {
        this.reset();
    }

    next(): number {
        const res = this.getNext();
        this.lastRes = res;
        const currIndex = this.currIndex;
        const futureRes = this.getNext();
        if (futureRes != null) {
            this.currIndex = currIndex;
        }
        return res;
    }

    private getNext(): number {
        let res: number = null;
        for (; res == null && this.currIndex < this.numbers.length; ++this.currIndex) {
            if (this.filter(this.numbers[this.currIndex])) {
                res = this.numbers[this.currIndex];
            }
        }
        return res;
    }

    reset(): void {
        this.currIndex = 0;
        this.lastRes = null;
    }

    current(): number {
        return this.isEnd()
            ? null
            : this.lastRes || this.next();
    }

    isEnd(): boolean {
        return this.currIndex >= this.numbers.length;
    }
}

const evenFilterNumberIterator = new FilterNumberIterator([1, 2, 3, 4, 5, 6, 7, 8, 9], (num) => num % 2 === 0);
console.log('Current');
console.log(evenFilterNumberIterator.current());
console.log(evenFilterNumberIterator.current());
console.log(evenFilterNumberIterator.current());
console.log('====================');
console.log('Event Iterate');
while (!evenFilterNumberIterator.isEnd()) {
    console.log(evenFilterNumberIterator.next());
}