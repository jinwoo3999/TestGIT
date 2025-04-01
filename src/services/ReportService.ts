export class ReportService {
    private databaseService: DatabaseService;

    constructor(databaseService: DatabaseService) {
        this.databaseService = databaseService;
    }

    public async generateExpenseReport(startDate: Date, endDate: Date): Promise<any> {
        const expenses = await this.databaseService.getExpenses(startDate, endDate);
        const totalExpenses = this.calculateTotal(expenses);
        return {
            totalExpenses,
            expenses,
        };
    }

    public async generateProfitReport(startDate: Date, endDate: Date): Promise<any> {
        const orders = await this.databaseService.getOrders(startDate, endDate);
        const totalRevenue = this.calculateTotal(orders);
        const expenses = await this.databaseService.getExpenses(startDate, endDate);
        const totalExpenses = this.calculateTotal(expenses);
        const profit = totalRevenue - totalExpenses;

        return {
            totalRevenue,
            totalExpenses,
            profit,
            orders,
        };
    }

    private calculateTotal(items: any[]): number {
        return items.reduce((total, item) => total + item.amount, 0);
    }
}