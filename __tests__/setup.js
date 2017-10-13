// Applies to all tests in this files
beforeEach(() => {
    // initialize
});

afterEach(() => {
    // clear
});

describe('matching cities to foods', () => {
    beforeEach(() => {
        // Applies only to tests in this describe block
    })
})

test.only('this will be the only test that runs', () => {
    expect(true).not.toBe(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});
