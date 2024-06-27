import openaiConfig from "./openaiConfig.js";

async function main(){
    const file = await openaiConfig.files.retrieve("file-uCWPdxosd7NR1QcIKeUMjS9A")
    console.log(file);
}

main();