export class Dashboard {
    getSummary(): any {
        return {
            totalExpenses: this.totalExpenses,
            totalProfit: this.totalProfit
        };
    }
    private totalExpenses: number;
    private totalProfit: number;

    constructor() {
        this.totalExpenses = 0;
        this.totalProfit = 0;
    }

    public displaySummary(): void {
        console.log(`Total Expenses: ${this.totalExpenses}`);
        console.log(`Total Profit: ${this.totalProfit}`);
    }

    public updateExpenses(amount: number): void {
        this.totalExpenses += amount;
    }

    public updateProfit(amount: number): void {
        this.totalProfit += amount;
    }
}