interface ISubscriber {
    notify();
}
class Observer {
   private subscribers: ISubscriber[] = [];

   public subscribe(subscriber: ISubscriber) {
    this.subscribers.push(subscriber);
   }

   public event() {
    this.subscribers.forEach(subscriber => subscriber.notify());
   }
}

class Subscriber implements  ISubscriber {
    notify() {
        console.log('React on the event inside observer');
    }
}

const observer = new Observer();
const subscriber = new Subscriber();
observer.subscribe(subscriber);
observer.event();