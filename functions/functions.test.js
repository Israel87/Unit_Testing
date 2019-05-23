const functions = require('./functions');

// adds two numbers
test('adds two numbers', () => {
    expect(functions.add(2,3)).toBe(5);
});

// adds two number not to get the right result
test('two numbers to get the wrong value ', () => {
    expect(functions.add(3,3)).not.toBe(5);
})

// should be null
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// // check value for null, undefined or 0 as parameter to be passed in
// // toBeTruthy can be used as well here.
test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// work with the user object
test('should be an Israelite object', () => {
    expect(functions.createUser()).toEqual({
        firstname: 'Israel',
        lastname: 'Nnaji'
    });
})

// should be less than 1600
test('should be less than 1600', () => {
    const value1 = 700;
    const value2 = 800;
    expect(value1 + value2).toBeLessThan(1600);
});

// should be less than 1800
test('should be less than or equal to 1600', () => {
    const value1 = 800;
    const value2 = 800;
    expect(value1 + value2).toBeLessThanOrEqual(1600);
});

// Regex
test('should not be I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Arrays
test('should have Admin in usernames', () => {
    const usernames = ['Auditor', 'Admin', 'User'];
    expect(usernames).toContain('Admin');
})


// HTTP Request using axios

