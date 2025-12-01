

const fs=require("fs")
console.log('start reading .....')

fs.readFile("./data/diary.txt","utf-8", (error,data)=>{
    if(error){
        console.error(error.message)
    }


    console.log('File content')

    console.log(data)
})

console.log('finished: this run immediently')