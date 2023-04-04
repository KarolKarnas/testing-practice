import capitalize from '../js/capitalize';

test(`'test' output 'Test'`, () => {
	expect(capitalize('test')).toBe('Test');
});

test(`'TEST' output 'Test'`, () => {
	expect(capitalize('TEST')).toBe('Test');
});

test(`'Test' output 'Test'`, () => {
	expect(capitalize('Test')).toBe('Test');
});
test(`'tEST' output 'Test'`, () => {
	expect(capitalize('tEST')).toBe('Test');
});
test(`'tEST' match '/[A-Z][a-z]*/'`, () => {
	expect(capitalize('tEST')).toMatch(/[A-Z][a-z]*/);
});
test(`test`, () => {
	expect(capitalize('tEfasdfSTfa  fasdfa fsa *&^%*Yisdhihsaifh')).toMatch(/[A-Z][a-z]*/);
});
