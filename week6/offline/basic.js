const jwt = require ("jsonwebtoken");


// decode, verify,generate

const value = {
    name: vivek,
    accountNumber:123123123
}
// jwt
const token = jwt.sign(value,"secret");
console.log(token);
// this token has been generated using this secret , and hence this token can only
// be verified using this secret

