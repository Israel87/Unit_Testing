const functions = {
    // adds two values a
    add : (num1, num2) => {
        return num1 + num2;
    },
    // isNull
    isNull: () => {
        return null;
    },
    // check value 
    checkValue: (x) => {
        return x;
    },
    // create a user object
    createUser: () => {
        const user = { firstname : 'Israel'};
        user['lastname'] ='Nnaji';
        return user;
    },
    // Axios http calls 
};

module.exports = functions;