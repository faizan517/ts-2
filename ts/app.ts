abstract class Vehical {
  constructor(
    private _make: string,
    private _model: number | string,
    private _year: number,
    private _rented: boolean = false
  ) {}
  get make() {
    return this._make;
  }
  get model() {
    return this._model;
  }
  get year() {
    return this._year;
  }
  get rented() {
    return this._rented;
  }
  set rented(newRented: boolean) {
    if (!newRented) {
      throw new Error("rented can't be empty");
    }
    this._rented = newRented;
  }
  abstract rentalRate(): number;

  rent(): void {
    if (this._rented) {
      console.log("Vehicle is already rented");
    } else {
      this._rented = true;
      console.log("Vehicle has been rented");
    }
  }
  return(): void {
    if (this._rented) {
      this._rented = false;
      console.log("Vehicle has been returned");
    } else {
      console.log("Vehical is not currently rented");
    }
  }
}
class Motorcycle extends Vehical {
  constructor(
    _make: string,
    _model: number | string,
    _year: number,
    private _engineSize: number
  ) {
    super(_make, _model, _year);
  }
  rentalRate() {
    return 4000; //Rs per Day
  }
  get engineSize() {
    return this._engineSize;
  }
  set engineSize(newEngineSize: number) {
    if (!newEngineSize) {
      throw new Error("EngineSize can't be empty");
    }
    this._engineSize = newEngineSize;
  }
}
class Car extends Vehical {
  constructor(
    _make: string,
    _model: number | string,
    _year: number,
    private _doors: number
  ) {
    super(_make, _model, _year);
  }
  rentalRate() {
    return 12000; //Rs per Day
  }
  get doors() {
    return this._doors;
  }
  set doors(newdoors: number) {
    if (!newdoors) {
      throw new Error("doors can't be empty");
    }
    this._doors = newdoors;
  }
}
class Truck extends Vehical {
  constructor(
    _make: string,
    _model: number | string,
    _year: number,
    private _capacity: number
  ) {
    super(_make, _model, _year);
  }
  rentalRate() {
    return 17000; //Rs per Day
  }
  get capacity() {
    return this._capacity;
  }
  set capacity(newcapacity: number) {
    if (!newcapacity) {
      throw new Error("capacity can't be empty");
    }
    this._capacity = newcapacity;
  }
}

//Example
const motorcycle = new Motorcycle("Yamaha", "YBR-150", 2021, 450);
motorcycle.rent();
motorcycle.rent();
// motorcycle.return();

const car = new Car("Toyota", "corolla", 2022, 4);
car.rent();
car.return();
console.log(car.rentalRate());

const truck = new Truck("Ford", "F-150", 2020, 1000);
truck.rent();
truck.return();
console.log(truck.rentalRate());
