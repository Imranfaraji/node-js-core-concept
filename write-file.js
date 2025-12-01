const fs=require("fs")


// write file sync
const content1="this is a content \n node js is awesome!!!"


try{
fs.writeFileSync('./output/test-sync.txt', content1)
console.log('file written sync')
}catch(error){
 console.log(error.message)
}


// write file async

const content2="this is a content too\n node js is awesome!!!"

fs.writeFile('./output/test-async.txt', content2,(error)=>{
    if(error){
        console.error(error.message)
    }else{
        console.log('file written async')
    }
})