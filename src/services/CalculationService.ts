export class CalculationService {
    calculateTotal(expenses: { amount: number }[]): number {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    calculateProfit(revenue: number, expenses: { amount: number }[]): number {
        const totalExpenses = this.calculateTotal(expenses);
        return revenue - totalExpenses;
    }

    calculateMonthlySummary(expenses: { amount: number; date: Date }[], month: number, year: number) {
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