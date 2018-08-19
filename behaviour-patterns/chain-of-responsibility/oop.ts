interface IHandler {
    handle(bubble?: boolean);
}

class Button implements IHandler {
    constructor(private parentHandler: IHandler = null) { }
    handle(bubble: boolean = true) {
        console.log('Handle by button');
        if(this.parentHandler && bubble) {
            this.parentHandler.handle();
        }
    }
}

class MyWindow implements IHandler {
    private childHandlers: IHandler[] = [];
    handle() {
        console.log('Handle by window');
    }

    addChildHandler(childHandler: IHandler) {
        this.childHandlers.push(childHandler);
    }
}

const myWindow = new MyWindow();
const button = new Button(myWindow);
myWindow.addChildHandler(button);
button.handle();
button.handle(false);