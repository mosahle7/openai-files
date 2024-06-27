import openaiConfig from "./openaiConfig.js";
import fs from "fs";

async function main(){
    const file_upload_response = await openaiConfig.files.create({
        file: fs.createReadStream("testfile.txt"),
        purpose: "assistants"
    })

    console.log(file_upload_response);
}

main()
