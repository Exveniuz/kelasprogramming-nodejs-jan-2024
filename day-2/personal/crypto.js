// const crypto = require("crypto")
const crypto = require("node:crypto");

const random = crypto.randomInt(10);
const randomString = crypto.randomBytes(10); 

// uuid - Universally Unique Identifier
const uuid = crypto.randomUUID();
const name = 'Irfan'

console.log(random);
console.log(randomString.toString("hex"));
console.log(uuid)

const nameWithId = name + "-" + random;
console.log(nameWithId)

// explore encryption and decryption using crypto module

// const secretText = 'The enemy will attack tonight':
// const secretCode = 


