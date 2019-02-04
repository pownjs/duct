exports.yargs = {
    command: 'duct <command>',
    describe: 'Side-channel attack enabler',
    aliases: ['ducting', 'd'],

    builder: (yargs) => {
        yargs.command(require('./subcommands/dns').yargs)
    }
}
