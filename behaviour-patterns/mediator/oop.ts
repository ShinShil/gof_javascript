interface IButtonMediator {
    onButtonClick();
}
interface IDialogMediator {
    onDialogClick();
}
interface IClickable {
    click();
}
class WindowMediator implements IButtonMediator, IDialogMediator {
    dialogClickCounter = new ClickCounter();
    constructor(private buttons: MyButton, private dialogs: Dialog) { }
    onDialogClick() {
        console.log('[mediator] Dialog clicked');
        this.dialogClickCounter.add();
    }
    onButtonClick() {
        console.log('[mediator] Button click, so I need call onClick at dialog');
        console.log('[mediator] Now I can set label of dialog, and dialog not need to store it')
        this.dialogs.setLabel();
        this.onDialogClick();
    }

}

class ClickCounter {
    private counter = 0;
    add() {
        this.counter++;
        if (this.counter % 2 === 0) console.log('[ClickCounter] Event click');
    }
}

class MyButton {
    constructor(public mediator: IButtonMediator) { }
    click() {
        console.log('[Button] clicked');
        this.mediator.onButtonClick();
    }
}

class Dialog {
    constructor(public mediator: IDialogMediator) { }

    click() {
        console.log('[Dialog] click');
        this.mediator.onDialogClick();
    }

    setLabel() {
        console.log('[Dialog] set label')
    }
}

const btn = new MyButton(null);
const dialog = new Dialog(null);
const mediator = new WindowMediator(btn, dialog);
btn.mediator = mediator;
dialog.mediator = mediator;
btn.click();
dialog.click();