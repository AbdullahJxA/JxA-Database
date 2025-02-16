var mysqldump = require(`mysqldump`)
var { Webhook, MessageBuilder } = require(`discord-webhook-node`)
var chalk = require(`chalk`)
var config = require(`${GetResourcePath(GetCurrentResourceName())}/Files/Config/Config.json`)
on(`onResourceStart`, async function (resource) {
    if (resource !== GetCurrentResourceName()) return
    console.log(chalk.rgb(23, 116, 131)(`    ┏┳  ┏┓  ┳┓     ┓      `))
    console.log(chalk.rgb(16, 87, 99)(` ┃┓┏┣┫━━┃┃┏┓╋┏┓┣┓┏┓┏┏┓`))
    console.log(chalk.rgb(9, 61, 70)(`┗┛┛┗┛┗  ┻┛┗┻┗┗┻┗┛┗┻┛┗ `))
    console.log(chalk.rgb(0, 255, 242)(`A backup of ${config.Database.Name} has been sent in the discord! ✅`))
    await delay(1500)
    var dumpFilePath = `./Database/JxA-Backup-${Date.now()}.sql`
    await mysqldump({ connection: { host: config.Database.Host, user: config.Database.User, password: config.Database.Password, database: config.Database.Name }, dumpToFile: dumpFilePath })
    await delay(3500)
    var webhook = new Webhook(config.Webhook.URL)
    var message = new MessageBuilder()
        .setColor(`#105b67`)
        .setAuthor(`Made By JxA - https://jxa.world`, `https://raw.githubusercontent.com/AbdullahJxA/Images/refs/heads/main/assets/images/logo.png`)
        .setDescription(`\`\`\`HeidiSQL Backups - باك اب الداتا بيز\`\`\``)
        .addField(`Dataname - أسم الداتا`, `\`\`\`${config.Database.Name}\`\`\``)
        .addField(`Timestamp - الوقت`, `<t:${Math.floor(Date.now() / 1000)}:R>`)
        .setFooter(`Made By JxA`, `https://raw.githubusercontent.com/AbdullahJxA/Images/refs/heads/main/assets/images/logo.png`)
        .setThumbnail(`https://raw.githubusercontent.com/AbdullahJxA/Images/refs/heads/main/assets/images/file-solid-240.png`)

    webhook.send(message)
    webhook.sendFile(dumpFilePath)
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}