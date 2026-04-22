const api = require("../services/api");
const {saveToken} = require("../utils/config");
const ora = require("ora");
const chalk = require("chalk");

module.exports = (program) => {
    program
        .command("login <username> <password>")
        .description("Login to the file server")
        .action(async (username, password) => {
            const spinner = ora("Logging...").start();
            try{
                const res = await api.post("/auth/login", {
                    username,
                    password
                });
                saveToken(res.data.data.token);
                spinner.succeed(chalk.green("Login Successfull"));
            } catch(err){
                spinner.fail(chalk.red(err.response?.data?.message || err.message || "Error"));
                console.log(err.response?.data);
            }
        });
}