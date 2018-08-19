interface ISender {
    send(): void;
}

class EmailSender implements ISender {
    send() {
        console.log('Send to email');
    }
}

class FacebookDecorator implements ISender {
    constructor(private sender: ISender) { }
    send() {
        console.log('Send to facebook');
        this.sender.send();
    }
}

class GoogleDecorator implements ISender {
    constructor(private sender: ISender) { }
    send() {
        console.log('Send to google');
        this.sender.send();
    }
}

let sender = new EmailSender();
sender = new GoogleDecorator(sender);
sender = new FacebookDecorator(sender);
sender.send(); 