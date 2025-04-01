"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reports = void 0;
class Reports {
    generateReports() {
        throw new Error('Method not implemented.');
    }
    constructor(expenses, orders) {
        this.expenses = expenses;
        this.orders = orders;
    }
    generateExpenseReport() {
        // Logic to generate expense report
        let totalExpenses = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
        return `Total Expenses: ${totalExpenses}`;
    }
    generateOrderReport() {
        // Logic to generate order report
        let totalOrders = this.orders.reduce((acc, order) => acc + order.totalCost, 0);
        return `Total Orders: ${totalOrders}`;
    }
    displayReports() {
        console.log(this.generateExpenseReport());
        console.log(this.generateOrderReport());
    }
}
exports.Reports = Reports;
