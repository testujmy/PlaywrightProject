var Truck = /** @class */ (function () {
    function Truck(brand, model, power) {
        this.brand = brand;
        this.model = model;
        this.power = power;
    }
    Truck.prototype.aboutCar = function () {
        console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power);
    };
    return Truck;
}());
var superTruck = new Truck("Man", "Cross", 400);
superTruck.aboutCar();
