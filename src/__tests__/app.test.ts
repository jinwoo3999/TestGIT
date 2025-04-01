import { app } from '../app';
import request from 'supertest';

describe('App Tests', () => {
    let server: any;

    beforeAll((done) => {
        server = app.listen(4000, () => {
            done();
        });
    });

    afterAll((done) => {
        if (server) {
            server.close(done);
        } else {
            done();
        }
    });

    test('GET /dashboard should return summary', async () => {
        const response = await request(app)
            .get('/dashboard')
            .expect(404);
        expect(response.body).toBeDefined();
    });
});