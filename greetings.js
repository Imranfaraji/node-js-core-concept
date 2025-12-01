const args=process.argv;


const name=args[2] || "guest"

const time=new Date().getHours()


let greeting;

if(time<12){
    greeting="Good morning"
}else if(time <18){
    greeting = "good after none"
}else{
    greeting= "good evening"
}

console.log(`${greeting} ${name}`);