const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const variations = [
    "aw see bada bida",
    "AWW SEE BADA BIDA",
    "aaaw seee baaadaaa biiida",
    "AWWW SEEEE BAAADA BIIIIIDA",
    "AW SEE BADA BIDA"
]

rl.question("How many times do you want to awsee? ", function (times) {
    for (let i = 0; i <= times; i++) {
        console.log(variations[Math.floor((Math.random() * variations.length))])
    }
    rl.close();
  });