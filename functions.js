const axios = require('axios')

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
    fetchUser : () => {
       return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res=> res.data)
        .catch(err => 'err' );
    }
};

module.exports = functions;