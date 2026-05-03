const {saveConfig} = require("../utils/config");

module.exports = (program) => {
    program
        .command("init")
        .description("Initialize configuration")
        .action(() => {
            saveConfig({
                baseURL: "https://fileserver-anfjf6gehwetcrcg.southeastasia-01.azurewebsites.net/api"
            });
            console.log("Configuration initialized successfully");
        });
}