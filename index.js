#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const { program } = require("commander");
program
  .version(require("./package.json").version)
  .command('beep', 'BEEP!')
program.parse(process.argv);