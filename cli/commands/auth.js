const api = require("../services/api");
const {saveToken, clearToken, getToken} = require("../utils/config");
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
    
    program
        .command("signup <username> <password>")
        .description("Register new user")
        .action(async (username, password) => {
            const spinner = ora("Signing up...").start();
            try{
                await api.post("/auth/signup", {
                    username,
                    password
                });
                spinner.succeed(chalk.green("Account Created Successfully"));
                console.log(chalk.yellow("You can now Login using"));
                console.log(chalk.underline(`fileserver login ${username} <password>`));

            } catch(err){
                spinner.fail(chalk.red(err.response?.data?.message || err.message));
            }
        })
    
    program
        .command("logout")
        .description("Logout from file-server")
        .action(() => {
            clearToken();
            console.log(chalk.green("Logged out successfully"));    
        });
}