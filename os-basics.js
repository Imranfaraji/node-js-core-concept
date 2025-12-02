const os=require('os')


console.log("system info \n");

console.log('-'.repeat(50));


console.log('platform details: ');

console.log("platform", os.platform());
console.log("architecture", os.arch());
console.log("os type ", os.type());
console.log("os released ", os.release());
console.log("Hodtname ", os.hostname());


console.log('-'.repeat(50));

console.log("cpu info \n");
const cpus=os.cpus()

console.log("CPU Model : ", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);


console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Free Memory : ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");


console.log("-".repeat(50));

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);
