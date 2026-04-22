const api = require("../services/api");
const fs = require("fs");
const FormData = require("form-data");
const ora = require("ora");
const chalk = require("chalk");

module.exports = (program) => {
    program
        .command("upload <filepath>")
        .description("Upload File")
        .action(async (filepath) => {
            const spinner = ora("Uploading...").start();

            try{
                const form = new FormData();
                form.append("file", fs.createReadStream(filepath));

                await api.post("/files/upload", form, {
                    headers: form.getHeaders(),
                });
                spinner.succeed(chalk.green("File Uploaded"));
            } catch(err){
                spinner.fail(chalk.red("Upload Failed"));
            }
        });
    
}