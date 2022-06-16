/*
* This program will contain the Vending Machine class, used to create 
* multiple objects for each different vending machine and information about them.
* Created by Mavis Javier
* June 1, 2022
*/

function VendingMachine(brand, model, quantity, type, numDeployed) {
    this.brand = brand;
    this.model = model;
    this.quantity = quantity;
    this.type = type;
    this.numDeployed = numDeployed;

    this.notInUse = function() {
        return this.quantity - this.numDeployed;
    };
}