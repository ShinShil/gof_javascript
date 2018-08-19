class Singletone {
    private static _instance = new Singletone();
    num = 5;
    constructor() {
        if (Singletone._instance)
            throw new Error('Singleton')
        Singletone._instance = this;
    }

    static get instance() {
        return this._instance;
    }
}

console.log(Singletone.instance.num);