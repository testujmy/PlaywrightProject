//Zadanie 1
interface Car {
  brand: string;
  model: string;
  power: number;

  aboutCar(): void;
}

class Truck implements Car {
  brand: string;
  model: string;
  power: number;

  constructor(brand: string, model: string, power: number) {
    this.brand = brand;
    this.model = model;
    this.power = power;
  }

  aboutCar(): void {
    console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power);
  }
}

let superTruck = new Truck("Man", "Cross", 400);
superTruck.aboutCar();