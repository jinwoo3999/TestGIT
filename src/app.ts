import express from 'express';
import bodyParser from 'body-parser';
// ...existing code...

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
// ...existing code...

// Only start the server if this file is run directly
let server: any;
if (require.main === module) {
    server = app.listen(port, () => {
        console.log(`Expense Manager app listening at http://localhost:${port}`);
    });
}

export { app, server };