class Laptop {
    constructor(hddSize, ram, cpuSpeed, batteryLife, screenSize, model, make, price, os, serialNumber) {
        this.hddSize = hddSize;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.batteryLife = batteryLife;
        this.screenSize = screenSize;
        this.model = model;
        this.make = make;
        this.price = price;
        this.os = os;
        this.serialNumber = serialNumber;
    }

    printAsString() {
        return `Specifications :\n HDD Size: ${this.hddSize} \n RAM: ${this.ram} \n CPU speed: ${this.cpuSpeed} \n Battery life: ${this.batteryLife} \n Screen size: ${this.screenSize} \n Model: ${this.model} \n Make: ${this.make} \n Price: ${this.price} \n OS: ${this.os} \n Serial number: ${this.serialNumber}`
    }

    checkRam() {
        if (typeof this.ram == "number") {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Laptop