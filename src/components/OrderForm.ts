interface IOrderForm {
    orderId: string;
    customerName: string;
    items: Array<{
      name: string;
      quantity: number;
      price: number;
    }>;
  }
  
  export default class OrderForm {
    private orderData: IOrderForm;
  
    constructor() {
      this.orderData = {
        orderId: '',
        customerName: '',
        items: []
      };
    }
  
    submitOrder(data: IOrderForm) {
      this.orderData = data;
      return this.orderData;
    }
  
    getOrderTotal(): number {
      return this.orderData.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    }
  }