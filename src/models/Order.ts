export class Order {
    id: number;
    product: string;
    quantity: number;
    totalCost: number;

    constructor(id: number, product: string, quantity: number, totalCost: number) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.totalCost = totalCost;
    }
}