const { setBaseURL, getConfig } = require("../utils/config");

module.exports = (program) => {
    program
        .command("config [key] [value]")
        .description("Set or get config")
        .action((key, value) => {
            if(!key){
                console.log(getConfig());
                return;
            }
            if(key === "baseURL" && value){
                setBaseURL(value);
                console.log("Base URL updated successfully");
            }
        });
};