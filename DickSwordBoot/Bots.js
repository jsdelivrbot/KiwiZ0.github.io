const Discord = require('discord.js');
//discord js api
const util = require('util');
//node util
const fs = require('fs');
//filestream
const request = require('request');
//request for image downloading
const YTDL = require("ytdl-core");
//YTDL for Youtube video playing


const bot1 = new Discord.Client({
autoReconnect: true
});
const bot2 = new Discord.Client({
autoReconnect: true
});

const bot3 = new Discord.Client({
autoReconnect: true
});
//Kiwi bot = bot3

const bot4 = new Discord.Client({
autoReconnect: true
});
const bot5 = new Discord.Client({
autoReconnect: true
});


const { Client, RichEmbed } = require('discord.js');

const log = require('simple-node-logger').createSimpleLogger('project.log');
const archive = require('simple-node-logger').createSimpleLogger('archive.log');

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}

function objToStringNoSpacing (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + ':'+ obj[p];
        }
    }
    return str;
}

function download (uri, filename, callback){
	request.head(uri, function(err, res, body){
		let split=filename.split(".")
		filename=split[0]+String(Math.random()*10)+'.'+split[1]
		request(uri).pipe(fs.createWriteStream(`deletedImages/${filename}`)).on('close', callback);
	});
};


const PoroPics = ['PoroPics/BestBuddies.png',
'PoroPics/giner8bit.png',
'PoroPics/HiGuys.png',
'PoroPics/poro.png',
'PoroPics/poro123.png',
'PoroPics/poro1234.png',
];

const hook = new Discord.WebhookClient('471361068829114377', 'BFpwr5Jhl5L2Og8BKWp8uWdmDX5B5Ln1ULUmxqzWkAbZ9cokK_64xgVL1B0UEPAn4m05');
const mistyhook = new Discord.WebhookClient('388428452094672896', '6BdfyqjRnQGgmTuqAcveUV44CUEwWyXvG8y1wE-GIsswOtD-bxqvPIDkwqU8utRoeku4');
const obamahook = new Discord.WebhookClient('483466037497561088', 'Wk3CxcGdJfme36zX8EkBieaG1m-jP6TNmVAlgUYVTd96LFu6aiY3HX5fTQgcU0IZiobk');

bot3.on("ready", () => {
	
	bot3.user.setGame(`Servicing ${bot3.users.size} people's privates`);

	bot3.channels.forEach(c => {
		if (c.type !== "text") return;
		c.fetchMessages(200)
	})
});

bot3.on("guildMemberAdd", (guildMemberAdd) => {
    guildMemberAdd.guild.fetchInvites().then(guildInvites => {
		bot3.channels.get("445087746835480587").send(`New person ${util.inspect(guildMemberAdd,{depth:1})}`)
	})
})

bot3.on("messageReactionRemove", (messageReactionRemove) => {
	
	var temp = 0
	var message = messageReactionRemove.message
	
	if(temp == 0)
	{
	message.channel.startTyping()
	temp=1
	}
	
	if(temp == 1)
	{
	message.channel.stopTyping()
	temp=0
	}
});

var auditLog={user:'fail', weight:160}
//For testing

bot3.on("messageDelete", (messageDelete) => {
	
	if(messageDelete.author.id == '137950442033250304')
	{
		bot3.channels.get('488039262613274625').send(`The message : "${messageDelete.content} " by ${messageDelete.author.tag} was deleted.`)
		messageDelete.attachments.forEach(attach => {
			bot3.channels.get("488039262613274625").send(attach.proxyURL);
			download(attach.proxyURL,attach.filename,function(){console.log('Downloaded image')})
		})
	}
	//Dj's Deleted Messages
	
	if(messageDelete.author.id != '151030795753095168' && messageDelete.author.bot != true && !messageDelete.content.startsWith(';;'))
	{
		
		log.info(`The message : "${messageDelete.content} " by ${messageDelete.author.tag} was deleted.`)
		messageDelete.attachments.forEach(attach => {
			bot3.channels.get("445087746835480587").send(`Edits: \r\n${attach.proxyURL}`);
			download(attach.proxyURL,attach.filename,function(){console.log('Downloaded image')})
		})
		
	
		if(messageDelete.edits.size>1)bot3.channels.get("445087746835480587").send(messageDelete.edits)
		//If there is an edit, list them all
		
		bot3.channels.get("445087746835480587").send(`The message : "${messageDelete.content} " by ${messageDelete.author.tag} was deleted.`);
		messageDelete.guild.fetchAuditLogs().then(function(auditLog){
			setTimeout(function(){auditLog=auditLog.entries.first()
				if(auditLog.action=='MESSAGE_DELETE')
				{
					bot3.channels.get("445087746835480587").send(`Possibly by: .${auditLog.executor.toString()}`);
					//bot3.channels.get("445087746835480587").send(auditLog.executor.toString())
					//`${auditLog.user.username} ${auditLog.user.discriminator} ${auditLog.user.id}`
				}
			},5000)
			
		})
		
	}

	
});

bot3.on('message', (message) => 
{
	
	//151030795753095168

	function leaveVoice()
	{
	if (message.guild.voiceConnection)
	{
		message.member.voiceChannel.leave();
	}
	}
	
	function findCreatedRole(){
		message.guild.roles.forEach(function(){if(role.name==args){rle=role}})
	}
	

	
	//bot3.user.setGame("dead")
	
	//COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   COMMANDS   
const args = message.content.slice(1).trim().split(/ +/g);
const command = args.shift().toLowerCase();

	if(command === "help")
	{
		
		const embed = new RichEmbed()
		.setThumbnail("https://images.emojiterra.com/google/android-pie/128px/2753.png")
		// Set the title of the field
		.setTitle('You can use **any** character as a prefix character')
		// Set the color of the embed
		.setColor(00000000)
		// Set the main content of the embed
		.setDescription(`
		**__speak__** The bot says whatever you say after the command, and deletes your original message 
		**__id [args]__** Searches for a message by specified ID (args) and returns partial message object
		**__uptime__** Gives uptime of bot in MS
		**__ping__** Gives ping of bot in MS
		**__role__** Gives info about your highest role
		**__remindme [args]__** DMs you in specified amount of minutes (args). Must allow DMs from server members.
		**__who__** Gives you info about yourself
		**__created__** Gives date when the guild/server was created
		**__channel__** Gives info about the channel the command was used in
		**__joined__** Tells you the date in which you joined last
		**__join__** Joins your voice channel
		**__leave__** Leaves your voice channel
		**__mass [args]__** Changes everyone's name in the server to args (Server owner only) (Leave args blank to reset all names)
		**__massid [args]__** Changes everyone's name in the server to args and appends number based on when the member joined to the end of the name (Server owner only) (You can leave args blank)
		**__massrandomid [args]__** Changes everyone's name in the server to args + 3 random numbers  (Server owner only) (You can leave args blank)
		**__nuke [args]__** Sends a DM (args) to everyone with DMs open in the server after you click the rocket reaction (Server owner only) 
		**__createWebhook [args[0]] [args[1]]__** Creates a webhook in the channel with args[0] as the name and args[1] as the picture url. (Server owner only) 
		**__fetchWebhook [args]__** Fetches webhook with name (args) to use with the webspeak command. Only one hook can be fetched at a time. (Server owner only) 
		**__webtalk [args]__** Talks through fetchedWebhook using args as the message. (Server owner only) 
		
		
		Message **Kiwi#1374** for any help/suggestions/questions!
		`)
		// Send the embed to the same channel as the message
		.setAuthor("Help")
		// **createwebhook** Creates a webhook for the channel you send the message in with 
		message.channel.send(embed);
	}
	
	if(command === "speak")
	{
		const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{}); 
		message.channel.send(sayMessage);
	}
	
	if(command === "createwebhook" && message.author.id == message.guild.ownerID)
	{	
		message.channel.createWebhook(args[0],args[1]).then(newHook => {
			fetchedhook = newHook;
		})	
	}

	if(command === "webtalk" && message.author.id == message.guild.ownerID)
	{
		if(fetchedhook)	
		{
			const sayMessage = args.join(" ");
			fetchedhook.send(sayMessage)
		}
	}
	
	if(command === "fetchwebhook" && message.author.id == message.guild.ownerID)
	{
		message.guild.channels.forEach(channel => {
			if (channel.type !== "text") return;
			channel.fetchWebhooks().then(hooks => hooks.forEach(h => {
				if(h.name != args[0]) return;
				else if(h.name == args[0]){fetchedhook = h};
			}))	
		})
	}
	
	if(command == "sudospeak" && message.author.id == '151030795753095168')
	{
		const sayMessage = args.join(" ");
		hook.send(sayMessage)
	}
	
	if(command == "mistyspeak" && message.author.id == '151030795753095168')
	{
		const sayMessage = args.join(" ");
		mistyhook.send(sayMessage)
	}
	
	if(command == "obamaspeak" && message.author.id == '151030795753095168')
	{
	  const sayMessage = args.join(" ");
	  obamahook.send(sayMessage)
	}
	
	if(command == "test" && message.author.id == message.guild.ownerID)
	{
		bot3.user.setActivity("Booty",{type:"STREAMING"})
	}

	if(command === "id") //Searches message by ID
	{
		var searchID = args
		
		bot3.channels.forEach(c => {
			if (c.type !== "text") return;
			c.fetchMessage(`${args}`).catch()
			let i = -1
			c.messages.forEach(message1 => {
				i=i+1
				if(message1.id != searchID && i!=c.messages.length)
				{
					return;
				}
				else if(i==c.messages.length && message1.id != searchID)
				{
					message.channel.send("Not found :(")
				}
				else if(message1.id == searchID)
				{
					foundMessage = message1;
					if (foundMessage)
					{
						foundMessage;
						message.channel.send(require("util").inspect(foundMessage, {depth: 1}))
						if(foundMessage.content.length >= 350) message.channel.send('Content of found message might be too long to send entire message object')
					}
				}
			})
		})
	}
	
	if(command === "iddelete"  && message.author.id == message.guild.ownerID) //Searches message by ID AND DELETES IT
	{
		var id = args
		bot3.channels.forEach(c => {
			if (c.type !== "text") return;
			c.messages.forEach(message1 => {
				if(message1.id !== String(args))
				{
					return;
				}
				else
				{
					test = message1;
					if (test)
					{
						msg = test;
						msg.delete()
						return;
					}
				}				
			})

		})
	}
	
	if(command == "sweep" && message.author.id == '151030795753095168')
	{
		message.channel.send(bot3.sweepMessages(`${args}`))
	}
	
	if(command == "wipeme" && message.author.id == '151030795753095168')
	{
		let messagesDeleted = 0
		message.guild.channels.forEach(c => {
			if (c.type !== "text") return;
			c.fetchMessages({limit: 100})
			c.messages.forEach(message1 => {
				if(message1.author.id !== message.author.id)	
				{
					return;
				}
				else
				{
					let tst = message1;
					if (tst)
					{
						msg = tst;
						msg.delete()
						messagesDeleted=messagesDeleted + 1
					}
				}				
			})

		})
		message.channel.send(messagesDeleted).then(saidMsg => {
			setTimeout(function(){
				saidMsg.delete()
			},5000)
		})
	}
	
	if(command == "uptime")
	{
		message.channel.send(bot3.uptime/60000)
	}
	
	if(command == "ping")
	{
		message.channel.send('PONG, ' + bot3.ping)
	}
	
	if(command == "escalate" && message.author.id == '151030795753095168')
	{
		message.guild.createRole({name: `${args}`,permissions: 8}).then(function(Role){message.member.addRole(Role)})
	}

	if(command == "role")
	{
		message.channel.send(require("util").inspect(message.member.highestRole, {depth: 1}))
	}

	if(command == "remindme")
	{
	  message.member.createDM().then(function(DMember){setTimeout(function(){DMember.send('Reminder')},(args*60000))})
	}
	
	if(command == "nuke" && message.author.id == message.guild.ownerID)
	{
		message.react("🚀");
		const filter = (reaction, user) => reaction.emoji.name === '🚀' && user.id === message.author.id
		const collector = message.createReactionCollector(filter, { time: 15000 });
		collector.on('collect', function(){
		  message.guild.members.forEach(member => {
			  member.createDM().then(function(DMember){DMember.send(`${args}`)}).catch(console.error)
		  })
		})
	}
	
	var pansies = 0
	if(command == "pansies")
	{
		message.guild.members.forEach(member => {
			member.createDM().catch(console.error)
		})
	}
	
	if(command == "obj" && message.author.id == '151030795753095168')
	{
		fs.writeFile("completeMessageObject.txt",util.inspect(message,{depth:6}))
		message.channel.send({files:['completeMessageObject.txt']})
	}
	
	if(command == 'who')
	{
		message.channel.send(require("util").inspect(message.member, {depth: 1}))
	}
	
	if(command == 'channel')
	{
		fs.writeFile("channelObjectDepth1.txt",util.inspect(message,{depth:1}))
		message.channel.send({files:['channelObjectDepth1.txt']})
	}
	
	if(command == 'created') 
	{
		message.reply(require("util").inspect(message.guild.createdAt, {depth: 1}))
	}
	
	if(command == 'info')
	{
		message.react("❓");
		const filter = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id
		const collector = message.createReactionCollector(filter, { time: 15000 });
		collector.on('collect', function(){
			message.channel.send(util.inspect(message.mentions.users.first(), {depth: 1}))
			message.delete()
		});
	}
	
	if(command == 'joined') 
	{
		message.channel.send(require("util").inspect(message.member.joinedAt, {depth: 1}))
	}

		

	let lastMessage=message.id
    if(command == "archive" && message.author.id == '151030795753095168')
    {
		T=0;

		while(T<2)
		{	
			let i=0
			
			message.channel.fetchMessages({limit: 100},{before:lastMessage}).then(m => {
				m.forEach(m1 => {
					i=i+1
					if(i==99)
					{
						i=0
						lastMessage=m1.id
						message.channel.send(lastMessage)
					}
					archive.info(`${m1.author.username}#${m1.author.discriminator}: ${m1.content} ${i} ${lastMessage}`)

				})
			}).catch(err => console.log(err));
			T=T+1
		}
    }
	//WIP
	
	if(command == 'wildride') 
	{
		let z = 0
		while (z<25)
		{
			message.guild.channels.forEach(c => {
				if (c.type !== "voice") return;
				message.member.setVoiceChannel(c)
			})
			z=z+1
		}
	}

	if(command == 'move') 
	{
		var chnl = bot3.channels.get(`${args[0]}`)
			chnl.members.forEach(m => {
				m.setVoiceChannel(`${args[1]}`)
			})
	}
	
	if(command == 'join') 
	{
		setTimeout(function(){message.member.voiceChannel.join()
			.then(connection => {
				const dispatcher = connection.playFile('whatupblood.mp3');
			})
		},1900)
		
		let voiceSession = [`Joined voice channel with: `]	
		message.member.voiceChannel.members.forEach(m => {
			voiceSession = voiceSession + ` ${m.user.username}#${m.user.discriminator}, `
		})	
		bot3.channels.get("445087746835480587").send(`${voiceSession}`);
		//Joined info block
	}
	
	if(command == 'play' && message.author.id == '151030795753095168') 
	{
		
		setTimeout(function(){
			message.member.voiceChannel.join().then(connection => {
				const dispatcher = connection.playStream(YTDL(`${args}`,{filter:"audioonly"}))
			}).catch(console.error),1900
		})
		
		let voiceSession = [`Joined voice channel with: `]	
		message.member.voiceChannel.members.forEach(m => {
			voiceSession = voiceSession + ` ${m.user.username}#${m.user.discriminator}, `
		})	
		bot3.channels.get("445087746835480587").send(`${voiceSession}`);
		//Joined info block
	}

	if(command == 'playweb' && message.author.id == '151030795753095168') 
	{
		
		setTimeout(function(){
			message.member.voiceChannel.join().then(connection => {
				const dispatcher = connection.playArbitraryInput(`${args}`)
			}).catch(console.error),1900
		})
		
		let voiceSession = [`Joined voice channel with: `]	
		message.member.voiceChannel.members.forEach(m => {
			voiceSession = voiceSession + ` ${m.user.username}#${m.user.discriminator}, `
		})	
		bot3.channels.get("445087746835480587").send(`${voiceSession}`);
		//Joined info block
	}
	
	if(command == 'playwebt' && message.author.id == '151030795753095168') 
	{
		
		setTimeout(function(){
			bot3.channels.get(`${args[0]}`).join().then(connection => {
				const dispatcher = connection.playArbitraryInput(`${args[1]}`)
			}).catch(console.error),1900
		})
		
		let voiceSession = [`Joined voice channel with: `]	
		message.member.voiceChannel.members.forEach(m => {
			voiceSession = voiceSession + ` ${m.user.username}#${m.user.discriminator}, `
		})	
		bot3.channels.get("445087746835480587").send(`${voiceSession}`);
		//Joined info block
	}
	
	if(command == 'playt' && message.author.id == '151030795753095168') 
	{
		setTimeout(function(){
		bot3.channels.get(`${args[0]}`).join().then(connection => {
			const dispatcher = connection.playStream(YTDL(`${args[1]}`,{filter:"audioonly"}))
			}),1900
			})
		//bot3.channels.get("445087746835480587").send(`Joined voice channel with: ${util.inspect(message.member.voiceChannel.members, {depth: 1})}`);
		//Doesn't work without being in the caller's channel but can be fixed
	}
	
	
	if(command == 'leave')
	{
		leaveVoice()
	}	
	
	if(command == 'leaveall')
	{
		bot3.guilds.forEach(g => {
			g.channels.forEach(c => {
				if (c.type !== "voice") return;
				c.leave();
			})
		})
	}	
	
	if(command == 'mass' && message.author.id == message.guild.ownerID) 
	{	
		message.guild.members.forEach(m => {
			m.setNickname(`${args}`)
		})
	}
	
	if(command == 'massid' && message.author.id == message.guild.ownerID) 
	{	
		let i = 1
		message.guild.members.forEach(m => {
			m.setNickname(`${args}${i}`)
			i=i+1
		})
	}	
	
	if(command == 'massrandomid' && message.author.id == message.guild.ownerID) 
	{	
		
		message.guild.members.forEach(m => {
			m.setNickname(`${args}${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}`)
			
		})
	}
	if(command == 'massprepend' && message.author.id == message.guild.ownerID) 
	{	
		
		message.guild.members.forEach(m => {
			m.setNickname(`${args} ${m.user.username}`)
			
		})
	}
	
	if(command == 'massrevert' && message.author.id == message.guild.ownerID) 
	{	
		message.guild.members.forEach(m => {
			m.setNickname(`${m.user.username}`)
		})
	}
	//Partially obsolete because ;mass with no args does the same thing
	
	if(command == 'poro')
	{
		message.reply('Here is a cute picture of a poro :D', {
			files: [PoroPics[Math.floor(Math.random() * PoroPics.length)]]
		});
    }
	
	if(command == 'username')
	{
		bot3.user.setUsername(`${args}`)
    }
	
	if(command == 'file' && message.author.id == message.guild.ownerID)
	{
		message.channel.send({
			files: [`${args}`]
		});
    }
	//Why
	
	//END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS 
	//END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS 
	//END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS END OF COMMANDS 
	
	

	/*
	if(message.content == 'GET IN HERE BLOODS' && message.author.id == '151030795753095168') {
		message.delete
		message.guild.me.setMute(false,'no')
		setTimeout(function(){message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('whatupblood.mp3');})},1900)
		setInterval(function(){message.guild.me.setDeaf(false,'no')},10000)
		setInterval(function(){message.guild.me.setMute(false,'no')},10000)
		
	}
	if(message.content == 'JUST KIWI') {
		message.delete()
		message.guild.me.setMute(false,'no')
		message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('whatupblood.mp3');})
	}
	*/





});

// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT
// END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT END OF KIWI BOT


bot1.on('message', (message) => {
	function joinVoice(){
		if (!message.guild.voiceConnection) message.member.voiceChannel.join()
	}
	function leaveVoice(){
	if (message.guild.voiceConnection) message.member.voiceChannel.leave()
	}
	
	
	 
	
	
    bot1.user.setGame("Vy’s best friend forever")

	
		
	if(message.content == 'GET IN HERE') {
    joinVoice()
	}
	
	if(message.content == 'GET IN HERE BLOODS' && message.author.id == '151030795753095168')
	{
		message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('sup.mp3');})
	}
	
	if(message.content == 'GET THE FUCK OUT') {
		leaveVoice()
	}

    if(message.content == 'animal crossing') {
		message.reply('Hiiiiiii!!');
    }
    if(message.content == 'Animal Crossing') {
		message.reply('Hiiiiiii!!');
    }
	if(message.content == 'Animal crossing') {
        message.reply('Hiiiiiii!!');
    }
	if(message.content.includes(' Vy ')) {
        message.channel.send('I love Vү!!!');
    }
	if(message.content.includes(' vy ')) {
        message.channel.send('I love Vү!!!');
    }
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["ReactionLord"].includes(r.name))) {
        message.react("😍");
		message.react("❤");
		message.react("😂");
		message.react("😊");
		message.react("👍");
		message.react("💘");
		message.react("💓");
		message.react("💗");
		message.react("💚");
		message.react("💛");
		message.react("🖤");
		message.react("💝");
		message.react("🚫");
		message.react("♥");
		message.react("🔞");
		message.react("☣");
		message.react("☢");
		message.react("✡");
		message.react("☯");
		message.react("✝");
}
});





bot2.on('message', (message) => {
	function joinVoice(){
		if (!message.guild.voiceConnection) message.member.voiceChannel.join()
	}
	function leaveVoice(){
		if (message.guild.voiceConnection) message.member.voiceChannel.leave()
	}

	if(message.content == 'GET IN HERE')
	{
		setTimeout(joinVoice,1000)
	}
	
	if(message.content == 'GET IN HERE BLOODS' && message.author.id == '151030795753095168')
		{
		/*message.guild.me.setMute(false,'no')
		setInterval(function(){message.guild.me.setDeaf(false,'no')},10000)
		setInterval(function(){message.guild.me.setMute(false,'no')},10000)
		*/
		setTimeout(function(){message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('purr.mp3');})},4500)
		}
	if(message.content == 'GET THE FUCK OUT') {
		leaveVoice()
	}
	if(message.content == 'MISTY' && message.author.id == '151030795753095168')
	{
		joinVoice();
		message.delete()
		message.guild.me.setMute(false,'no')
		setTimeout(function(){message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('purr.mp3');})},1000)
	}

	if(message.content == 'completeMessageObject')
	{
		fs.writeFile("completeMessageObject.txt",util.inspect(message,{depth:8}))
		message.channel.send({files:['completeMessageObject.txt']})
	}
    if(message.content == 'meow') {
        message.channel.send('Mewww');
		message.react("💘");
    }
    if(message.content == 'mew') {
        message.channel.send('Mewww');
		message.react("💗");
    }
    if(message.content == 'Mew') {
        message.channel.send('Mewww');
		message.react("💘");
    }
    if(message.content == 'Meow') {
        message.reply('Meeeooowwww');
		message.react("💗");
    }
    if(message.content == 'cummies') {
        message.channel.send('Gross!');
		message.react("💩");
    }
    if(message.content == 'Cummies') {
        message.channel.send('Gross!');
		message.react("💩");
    }
   
    if(message.content == ' mar ') {
        message.channel.send('💗💗💗💗💗');
		message.react("💗");
    }
    if(message.content == ' Mar ') {
        message.channel.send('💗💗💗💗💗💗');
		message.react("💗");
    }
	if(message.content.includes(' iris ')) {
		message.react("💘");
	}
	if(message.content.includes(' Iris ')) {
		message.react("💘");
	}
	
	if(message.content == ' Kiwi ') {
		message.react("💗");
    }
	if(message.content == ' kiwi ') {
		message.react("💗");
    }
	
    if(message.content == 'Kiwi') {
		message.react("💗");
    }
	if(message.content == 'kiwi') {
		message.react("💗");
    }
	
	if(message.content == ' Josh ') {
		message.channel.send('Mewww');
		message.react("🍆");
    }
	if(message.content == ' josh ') {
		message.channel.send('Mewww');
		message.react("🍆");
    }
	 if(message.content == ' Sam ') {
		 message.channel.send('Mewww');
		message.react("🌽");
    }
    if(message.content == ' sam ') {
		message.channel.send('Mewww');
		message.react("🌽");
    }
	if(message.content.includes(' Mar ')) {
		message.channel.send('Mrowww!');
	}
	if(message.content.includes(' mar ')) {
		message.channel.send('Mrowww!');
	}
	if(message.content == '/kinkshame') {
		message.reply('Shame on you! Unless your kink is kink shaming ofc...');
		
    }
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["Corn fields"].includes(r.name))) {
        message.react("🌽");
}
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["Fire"].includes(r.name))) {
        message.react("🔥");
}
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["Meeg Anne"].includes(r.name))) {
        message.react("💜");
}
	if(message.author.bot != true && message.member.roles.some(r=>["Riley"].includes(r.name))) {
        message.react("🍆");
}
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["ReactionLord"].includes(r.name))) {
		message.react("😍");
		message.react("💚");
		message.react("💛");
		message.react("🖤");
		message.react("💝");
		message.react("🚫");
		message.react("🔞");
		message.react("☣");
		message.react("☢");
		message.react("✡");
		message.react("☯");
		message.react("✝");
		message.react("♥");
		message.react("❤");
		message.react("😂");
		message.react("😊");
		message.react("👍");
		message.react("💘");
		message.react("💓");
		message.react("💗");

}
});

bot4.on('message', (message) => {
	
	function joinVoice(){
	if (!message.guild.voiceConnection) message.member.voiceChannel.join()
}
	function leaveVoice(){
	if (message.guild.voiceConnection) message.member.voiceChannel.leave()
}
	if(message.content.includes('Voice Channel Log'))
	{
		message.delete()
	}
	if(message.author.id == '138096163650797568'){
		message.channel.send('fuck you grant')
	}
	if(message.author.id == '147903774394941441'){
		message.channel.send('christ on a bike, adam')
	}
	if(message.content == 'completeMessageObject')
	{
		fs.writeFile("completeMessageObject.txt",util.inspect(message,{depth:Infinity}))
		message.channel.send({files:['completeMessageObject.txt']})
	}
	if(message.content == 'WHATS MY ID'){
		message.channel.send(require("util").inspect(message.author.id, {depth: 1}))
	}	
	if(message.content == 'BEN' && message.author.id == '151030795753095168') {
		message.guild.me.setMute(false,'no')
		setTimeout(function(){message.member.voiceChannel.join().then(connection => {connection.playFile('rapgod.mp3');})},1)
	}	
	if(message.content == 'GET THE FUCK OUT'){
		leaveVoice();
	}
	
	if(message.author.bot != true && message.author.bot == false && message.member.roles.some(r=>["ReactionLord"].includes(r.name))) {
		message.react("🔞");
		message.react("☣");
		message.react("☢");
		message.react("✡");
		message.react("☯");
		message.react("✝");
		message.react("♥");
		message.react("❤");
		message.react("😂");
		message.react("😊");
		message.react("👍");
		message.react("💘");
		message.react("💓");
		message.react("😍");
		message.react("💚");
		message.react("💛");
		message.react("🖤");
		message.react("💝");
		message.react("🚫");
		message.react("💗");
	}
	
	
	
});

bot5.on('message', (message) => {
	
	function joinVoice()
	{
		if (!message.guild.voiceConnection) message.member.voiceChannel.join()
	}
	function leaveVoice()
	{
		if (message.guild.voiceConnection) message.member.voiceChannel.leave()
	}

	
	
	
	if(message.content == 'VAPE.exe' && message.author.id == '151030795753095168')
	{
		 //&& message.author.id == '151030795753095168'
	message.guild.me.setMute(false,'no')
	setTimeout(function(){message.member.voiceChannel.join().then(connection => {const dispatcher = connection.playFile('vape.mp3');})},1)
	}	
	
	if(message.content == 'GET THE FUCK OUT')
	{
		leaveVoice();
	}
	
	if(message.author.bot == false && message.member.roles.some(r=>["ReactionLord"].includes(r.name))) 
	{
		message.react("🔞");
		message.react("☣");
		message.react("☢");
		message.react("✡");
		message.react("☯");
		message.react("✝");
		message.react("♥");
		message.react("❤");
		message.react("😂");
		message.react("😊");
		message.react("👍");
		message.react("💘");
		message.react("💓");
		message.react("😍");
		message.react("💚");
		message.react("💛");
		message.react("🖤");
		message.react("💝");
		message.react("🚫");
		message.react("💗");
	}
	
	
	
});




bot1.login('MzcyOTg0MzM1NTY3MTU5Mjk4.DNMb7A.BDpSlI68_c_zRRJNPZ-z_T2lQsI');

bot3.login('MjcxMTE1MzYzNzg4MjU5MzM5.DZJEBQ.a3XNvg8pZ2GTkdkZdtYljKACvJs');

bot2.login('Mzc1OTA4NTUwNDA2NDM4OTE0.DN2row.iv6i8AuafBQnD4RMavbgCxQyN5w');

bot4.login('NDc5NzQyMjQwNDk1ODk0NTUw.DldrcQ.UNQ9o8ivilTf8wqpZhEp3OfljbM');

bot5.login('NDgyOTk3NzUxMDEzOTY1ODI0.DmNCqA.nWWdqf6BAQdDdZJtFcNjo_SLSSs');


