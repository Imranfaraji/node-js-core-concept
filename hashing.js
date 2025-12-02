const crypto =require('crypto')

console.log('\n MD5 hsshing ');

const md5Hash=crypto.createHash('md5').update('password123').digest('hex')//not recomended

console.log('inpute: password123');

console.log('MD5 HashPassword: ', md5Hash);

const sha256Hash=crypto.createHash('sha256').update('password123').digest('hex')

console.log('inpute: password123');

console.log('sha256 HashPassword: ', sha256Hash);

const sha512Hash=crypto.createHash('sha512').update('imran@2020').digest('hex')

console.log('inpute: imran@2020');

console.log('sha512 HashPassword: ', sha512Hash);