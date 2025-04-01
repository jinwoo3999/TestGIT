import { Database } from 'sqlite3';
export interface Expense {
    id?: number;
    amount: number;
    description: string;
    date: string;
    // add other necessary fields
}

export interface Order {
    id?: number;
    total: number;
    date: string;
    // add other necessary fields
}

export class DatabaseService {
    private db: any;
    
    constructor(private dbPath: string) {
    }

    async connect(): Promise<void> {
        // Add database connection logic here
        this.db = await this.initializeDatabase();
    }

    private async initializeDatabase() {
        // Implement database initialization
        // Return database instance
    }

    async getExpenses(): Promise<Expense[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not connected'));
                return;
            }
            this.db.all('SELECT * FROM expenses', (err: Error | null, rows: any[]) => {
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
            this.db.all('SELECT * FROM orders', (err: Error | null, rows: any[]) => {
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