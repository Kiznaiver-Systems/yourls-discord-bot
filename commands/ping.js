module.exports = {
    name: 'ping',
    description: "I reply Pong",
    execute(message, args, client){ 
        message.channel.send (`Message response time is ${Date.now() - message.createdTimestamp}ms\nDiscord API response time is ${client.ws.ping}ms`)
    }
}


