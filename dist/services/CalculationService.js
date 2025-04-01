"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationService = void 0;
class CalculationService {
    calculateTotal(expenses) {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    calculateProfit(revenue, expenses) {
        const totalExpenses = this.calculateTotal(expenses);
        return revenue - totalExpenses;
    }
    calculateMonthlySummary(expenses, month, year) {
        const monthlyExpenses = expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate.getMonth() === month && expenseDate.getFullYear() === year;
        });
        return {
            total: this.calculateTotal(monthlyExpenses),
            count: monthlyExpenses.length,
        };
    }
}
exports.CalculationService = CalculationService;
