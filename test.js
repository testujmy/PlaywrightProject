var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Zadanie 1
var Car = /** @class */ (function () {
    function Car(brand, model, power) {
        this.brand = brand;
        this.model = model;
        this.power = power;
    }
    Car.prototype.aboutCar = function () {
        console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power);
    };
    return Car;
}());
var speedCar = new Car("Seat", "Ibiza", 150);
speedCar.aboutCar();
//Zadnaie 2
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorbike.prototype.aboutBike = function () {
        console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power + " ,liczba miejsc: " + this.numberOfSeats);
    };
    return Motorbike;
}(Car));
var bike = new Motorbike("Yamaha", "Fazer", 110);
bike.numberOfSeats = 2;
bike.aboutBike();
