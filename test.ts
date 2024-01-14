//Zadanie 1
class Car {
  brand: string;
  model: string;
  power: number;

  constructor(brand: string, model: string, power: number) {
    this.brand = brand;
    this.model = model;
    this.power = power;
  }

  aboutCar() {
    console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power);
  }
}

let speedCar = new Car("Seat", "Ibiza", 150);
speedCar.aboutCar();

//Zadnaie 2
class Motorbike extends Car {
  numberOfSeats: number;
  
  aboutBike() {
    console.log("Marka: " + this.brand + " ,model: " + this.model + " ,moc silnika: " + this.power + " ,liczba miejsc: " + this.numberOfSeats);
  }
}

let bike = new Motorbike("Yamaha", "Fazer", 110);
bike.numberOfSeats = 2;
bike.aboutBike();