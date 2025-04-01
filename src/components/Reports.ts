export class Reports {
    private expenses: any[]; // Array to hold expense data
    private orders: any[]; // Array to hold order data

    constructor(expenses: any[], orders: any[]) {
        this.expenses = expenses;
        this.orders = orders;
    }

    public generateExpenseReport(): string {
        // Logic to generate expense report
        let totalExpenses = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
        return `Total Expenses: ${totalExpenses}`;
    }

    public generateOrderReport(): string {
        // Logic to generate order report
        let totalOrders = this.orders.reduce((acc, order) => acc + order.totalCost, 0);
        return `Total Orders: ${totalOrders}`;
    }

    public displayReports(): void {
        console.log(this.generateExpenseReport());
        console.log(this.generateOrderReport());
    }
}