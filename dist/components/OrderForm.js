"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderForm {
    constructor() {
        this.orderData = {
            orderId: '',
            customerName: '',
            items: []
        };
    }
    submitOrder(data) {
        this.orderData = data;
        return this.orderData;
    }
    getOrderTotal() {
        return this.orderData.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
}
exports.default = OrderForm;
