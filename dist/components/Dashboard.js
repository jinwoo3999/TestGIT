"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
class Dashboard {
    getSummary() {
        return {
            totalExpenses: this.totalExpenses,
            totalProfit: this.totalProfit
        };
    }
    constructor() {
        this.totalExpenses = 0;
        this.totalProfit = 0;
    }
    displaySummary() {
        console.log(`Total Expenses: ${this.totalExpenses}`);
        console.log(`Total Profit: ${this.totalProfit}`);
    }
    updateExpenses(amount) {
        this.totalExpenses += amount;
    }
    updateProfit(amount) {
        this.totalProfit += amount;
    }
}
exports.Dashboard = Dashboard;
