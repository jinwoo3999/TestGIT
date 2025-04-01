const app = require('../app'); // Adjust the path as necessary

test('hello world!', () => {
	expect(app()).toBe('Hello, World!');
});