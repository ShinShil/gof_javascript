class NumberPrinter {
    public static print(id: number) {
        this.log(id);
    }

    private static log(d: any) {
        console.log('[Number Printer] ' + d);
    }
}

class NumberPrinterAdapter {
    private static map = {
        one: 1,
        two: 2,
        three: 3
    }

    public static printNumber(input: any) {
        if(!this.map[input]) throw Error('Should be "one", "two" or "three"');
        NumberPrinter.print(this.map[input])
    }
}

class MainApplication {
    public static main() {
        console.log('Main application can read only chars');
        const userInput = 'one';
        console.log('F.e. app can\'t read 1, but can read "one"');
        console.log('userinput: "one"');
        console.log('There is number printer, which can work only with digits');
        console.log('Time for adapter');
        NumberPrinterAdapter.printNumber(userInput);
        console.log('Job is completed');
    }
}

MainApplication.main();