export class ExpenseForm {
    submitExpense(body: any) {
        throw new Error('Method not implemented.');
    }
    private category: string;
    private amount: number;
    private date: Date;

    constructor(category: string, amount: number, date: Date) {
        this.category = category;
        this.amount = amount;
        this.date = date;
    }

    public getCategory(): string {
        return this.category;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getDate(): Date {
        return this.date;
    }

    public saveExpense(): void {
        // Logic to save the expense to the database
    }
}