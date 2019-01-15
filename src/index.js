"use strict";
var Service = /** @class */ (function () {
    function Service(message) {
        this.message = message;
    }
    Service.prototype.writeMessage = function () {
        // tslint:disable-next-line:no-console
        console.log(this.message);
    };
    return Service;
}());
var service = new Service('Hello World!');
service.writeMessage();
