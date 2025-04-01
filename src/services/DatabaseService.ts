import { Database } from 'sqlite3';
import { Expense, Order } from '../types';

export class DatabaseService {
    private db: Database | null = null;
    private dbPath: string;

    constructor(dbPath: string) {
        this.dbPath = dbPath;
    }

    async getExpenses(): Promise<Expense[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not connected'));
                return;
            }
            this.db.all('SELECT * FROM expenses', (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows as Expense[]);
            });
        });
    }

    async getOrders(): Promise<Order[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not connected'));
                return;
            }
            this.db.all('SELECT * FROM orders', (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(rows as Order[]);
            });
        });
    }
}

export const DATABASE_CONFIG = {
    path: './data/database.sqlite'
};