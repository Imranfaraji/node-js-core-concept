const path=require('path')


console.log('curretn file info : \n');

console.log('file name: ' ,__filename);
console.log('Directory: ',__dirname);


console.log("\n" + "-".repeat(50) + "\n");


const filePath="/imran/document/nexlevel.pdf";

console.log('analyzing path',"\n");

console.log('directory: ',path.dirname(filePath));
console.log('BaseName:', path.basename(filePath));
console.log('File extension: ', path.extname(filePath));

console.log("file name:", path.basename(filePath,path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed=path.parse(filePath)

console.log('parsed path object:', parsed);

