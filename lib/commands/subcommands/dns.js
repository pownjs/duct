exports.yargs = {
    command: 'dns',
    describe: 'DNS ducting',

    builder: (yargs) => {
        yargs.option('channel', {
            describe: 'Restore channel',
            type: 'string'
        })

        yargs.option('output', {
            describe: 'Output format',
            type: 'string',
            default: 'string',
            choice: ['string', 'hex', 'json']
        })
    },

    handler: async(argv) => {
        const { channel, output } = argv

        const ws = require('ws')
        const { hexy} = require('hexy')

        const log = {
            string: (input) => console.log(input),
            hex: (input) => console.log(hexy(input)),
            json: (input) => console.log(JSON.stringify(input))
        }[output]

        const client = new ws('ws://dns.requestbin.net:8080/dnsbin')

        client.on('open', () => {
            if (channel) {
                client.send(JSON.stringify({restore: true, master: channel}))
            }
        })

        client.on('message', (message) => {
            const { type = '', data = '' } = JSON.parse(message)

            if (type == 'request') {
                const { time = Date.now(), ip = '', content = '' } = JSON.parse(data)

                console.info(`Message at ${time} from ${ip}`)

                log(content)
            }
            else
            if (type == 'token') {
                console.info(`Subdomain to use: *.${data}.d.requestbin.net`)
            }
        })
    }
}
