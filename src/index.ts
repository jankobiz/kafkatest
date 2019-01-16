class InnerClass {
    private innerMessage: string;
    constructor(message: string) {
        this.innerMessage = message;
    }
    public provideMessage(): string {
        // this.innerMessage = 'Provided messsage!';
        return this.innerMessage;
    }
}

interface IInnerClass {
    new (message: string): InnerClass;
}
// tslint:disable-next-line:max-classes-per-file
class Service {

    private message: string | undefined;

    constructor(message: string) {
        this.message = message;
    }

    public writeMessage(IC: IInnerClass) {

        const innerObject = new IC('Instantiated class!');
        // tslint:disable-next-line:no-console
        console.log(`${this.message} ${innerObject.provideMessage()}`);
    }

}

let service = new Service('Hello World!');
service.writeMessage(InnerClass);
