export class Expense {
    id: number;
    category: string;
    amount: number;
    date: Date;

    constructor(id: number, category: string, amount: number, date: Date) {
        this.id = id;
        this.category = category;
        this.amount = amount;
        this.date = date;
    }
}