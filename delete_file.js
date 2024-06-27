import openaiConfig from "./openaiConfig.js";

async function main(){
    const deleteFile=await openaiConfig.files.del("file-OKz1x6pvAogz6az964j5Tlh9");
    console.log(deleteFile)
}
main();