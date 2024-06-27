import openaiConfig from "./openaiConfig.js";

async function main(){
    const uploadedFiles = await openaiConfig.files.list({
        purpose:"assistants"
    }
    );
    console.log(uploadedFiles);
}

main();