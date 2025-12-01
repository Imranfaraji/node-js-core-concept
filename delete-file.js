const fs=require('fs')

fs.writeFileSync('./output/temp.txt',"this is temp file")

console.log('file created successfully')

if(fs.existsSync('./output/temp.txt')){
    console.log('file exist!!!')

    fs.unlinkSync('./output/temp.txt')
    console.log('file deleted');
}