"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseForm = void 0;
class ExpenseForm {
    submitExpense(body) {
        throw new Error('Method not implemented.');
    }
    constructor(category, amount, date) {
        this.category = category;
        this.amount = amount;
        this.date = date;
    }
    getCategory() {
        return this.category;
    }
    getAmount() {
        return this.amount;
    }
    getDate() {
        return this.date;
    }
    saveExpense() {
        // Logic to save the expense to the database
    }
}
exports.ExpenseForm = ExpenseForm;
