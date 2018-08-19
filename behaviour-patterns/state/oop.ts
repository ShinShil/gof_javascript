interface IButtonState {
    click();
}
class EnabledButtonState implements IButtonState {
    constructor(private clickHandler: () => void) { }
    click() {
        this.clickHandler();
    }
}
class DisabledButtonState implements IButtonState {
    click() {
        console.log('[disabled] Can not click, because disabled');
    }
}
class ButtonWithState {
    private buttonState: IButtonState;

    constructor() {
        this.buttonState = new EnabledButtonState(this.handleClick.bind(this));
    }
    

    click() {
        this.buttonState.click();
    }

    enable() {
        this.buttonState = new EnabledButtonState(this.handleClick.bind(this));
    }

    disable() {
        this.buttonState = new DisabledButtonState();
    }

    private handleClick() {
       console.log('[button] Handle click');
    }
}

const buttonWithState = new ButtonWithState();
buttonWithState.click()
buttonWithState.disable();
buttonWithState.click();
buttonWithState.enable();
buttonWithState.click();