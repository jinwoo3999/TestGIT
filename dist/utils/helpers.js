"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.calculateTotal = calculateTotal;
exports.calculateProfit = calculateProfit;
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}
function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}
function calculateProfit(revenue, expenses) {
    return revenue - expenses;
}
