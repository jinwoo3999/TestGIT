"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, product, quantity, totalCost) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.totalCost = totalCost;
    }
}
exports.Order = Order;
