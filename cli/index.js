#!/usr/bin/env node

const {Command} = require("commander");
const updateNotifier = require("update-notifier").default;
const pkg = require("./package.json");

updateNotifier({pkg}).notify();

const program = new Command();

program
    .name("fs")
    .description("CLI for File-Server")
    .version("1.0.0");

require("./commands/auth")(program);
require("./commands/file")(program);
require("./commands/config")(program);
require("./commands/init")(program);

program.parse(process.argv);