interface IState {
    getName(): string;
}

class EditorState implements IState {
    name: string;
    fontSize: number;
    color: string;
    getName(): string {
        return this.name;
    }
}

class StateBuilder {
    static getEditorState(fontSize: number = 14, color: string = 'black', name: string = 'editor'): EditorState {
        const editorState = new EditorState();
        editorState.name = name;
        editorState.color = color;
        editorState.fontSize = fontSize;
        return editorState;
    }
}

class Editor {
    constructor(private editorState: EditorState) { }

    get state(): IState {
        return StateBuilder.getEditorState(this.editorState.fontSize, this.editorState.color, this.editorState.name);
    }

    restoreState(state: IState) {
        this.editorState = state as EditorState;
    }

    set fontSize(fontSize: number) {
        this.editorState.fontSize = fontSize;
    }

    get fontSize(): number {
        return this.editorState.fontSize;
    }
}

console.log('Create editor with initial state');
const editor = new Editor(StateBuilder.getEditorState());
console.log('Save state without access to it fields');
console.log('But can access properties that is provided by interface');
const istate = editor.state;
console.log(istate.getName());
editor.fontSize = 16;
console.log('font size after change: ', editor.fontSize);
editor.restoreState(istate);
console.log('Font size after restore: ', editor.fontSize);

