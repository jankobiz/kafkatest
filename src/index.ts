class InnerClass {
    private innerMessage: string | undefined;
    public provideMessage(): string {
        this.innerMessage = 'Provided messsage!';
        return this.innerMessage;
    }
}
// tslint:disable-next-line:max-classes-per-file
class Service {

    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public writeMessage() {

        const innerObject = new InnerClass();
        // tslint:disable-next-line:no-console
        console.log(this.message + innerObject.provideMessage());
    }

}

let service = new Service('Hello World!');
service.writeMessage();
