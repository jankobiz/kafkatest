class Service {
    private message: string;
    constructor(message: string) {
        this.message = message;
    }

    public writeMessage() {
        // tslint:disable-next-line:no-console
        console.log(this.message);
    }

}

let service = new Service('Hello World!');
service.writeMessage();
