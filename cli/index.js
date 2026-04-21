#!/usr/bin/env node

const {Command} = require("commander");

const program = new Command();

program
    .name("fs")
    .description("CLI for File-Server")
    .version("1.0.0");

require("./commands/auth")(program);
require("./commands/file")(program);

program.parse(process.argv);