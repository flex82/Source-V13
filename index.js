const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: 131071,
});
client.once('ready', () => {
  console.clear();
  const line = '─'.repeat(50);
  console.log(line);
  console.log(`🌐 ${client.user.tag} is now online!`);
  console.log(line);
  console.log(`🤖 Bot Username  : ${client.user.username}`);
  console.log(`🆔 Bot ID        : ${client.user.id}`);
  console.log(`📅 Launched On   : ${new Date().toLocaleString()}`);
  console.log(line);
  console.log(`📊 Connected to  : ${client.guilds.cache.size} servers`);
  console.log(`👥 Total Users   : ${client.users.cache.size}`);
  console.log(`© 2025  Dark Developers - All Rights Reserved.`);
  console.log(`🔗 GitHub: https://github.com/flex82/`);
  console.log(`💬 Discord: https://discord.gg/YtfcfeDD5c`);
  console.log(line);
  console.log('✅ Bot is fully operational and ready to serve!');
  console.log(line);
  client.user.setActivity(`# ~ Dark Developers`, { type: 'WATCHING' })
client.user.setStatus("idle");
});
const prefix = "-"


client.login("")
