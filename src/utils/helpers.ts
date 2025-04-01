export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

export function calculateTotal(expenses: Array<{ amount: number }>): number {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function calculateProfit(revenue: number, expenses: number): number {
    return revenue - expenses;
}