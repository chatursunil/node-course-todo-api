// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const password = 'lakshya';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

const hashedPassword = '$2a$10$b7AGVhLFkIbi2GKwTpPBm.3eLvvkM.vMPFWsxDCUedDNvBd0i5XFe';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// const data = {
//     id: 10
// }

// const token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// let message = 'lakshya';
// let hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was ok');
// } else {
//     console.log('Don\'t trust the data');
// }