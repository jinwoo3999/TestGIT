import express from 'express';
import bodyParser from 'body-parser';
import { DatabaseService } from './services/DatabaseService';
import { Dashboard } from './components/Dashboard';
import { OrderForm } from './components/OrderForm';
import { ExpenseForm } from './components/ExpenseForm';
import { Reports } from './components/Reports';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Database
const databaseService = new DatabaseService();
databaseService.connect();

// Routes
app.get('/dashboard', (req, res) => {
    const dashboard = new Dashboard();
    res.json(dashboard.getSummary());
});

app.post('/orders', (req, res) => {
    const orderForm = new OrderForm();
    const result = orderForm.submitOrder(req.body);
    res.json(result);
});

app.post('/expenses', (req, res) => {
    const expenseForm = new ExpenseForm();
    const result = expenseForm.submitExpense(req.body);
    res.json(result);
});

app.get('/reports', (req, res) => {
    const reports = new Reports();
    res.json(reports.generateReports());
});

// Start the server
app.listen(port, () => {
    console.log(`Expense Manager app listening at http://localhost:${port}`);
});