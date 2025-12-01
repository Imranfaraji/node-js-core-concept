const fs=require('fs')

fs.writeFileSync('./output/app.log',"Application started\n")

console.log('file created')


const logEntry1=`${new Date().toISOString()} User Log in \n`


fs.appendFileSync('./output/app.log',logEntry1)


const logEntry2=`${new Date().toISOString()} user fetch data`

fs.appendFileSync('./output/app.log',logEntry2)

console.log('content update');