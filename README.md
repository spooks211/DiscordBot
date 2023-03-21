<h1>Discord Bot</h1>
<p>This is a bot that I made for my friend's discord server.</p>
<p>Please note, some of the files are unannotated, purely because there's some commands that are near duplicates, if that's the case at least one of them will be fully annotated</p>

<h2>Prerequisites</h2>
<p>Before you can run this bot, you will need to have Node.js installed on your machine.</p>

<h2>Configuration</h2>
<p>
To configure the bot, follow these steps:

1. Open the **config.json** file in a text or code editor.
2. Put in your bot token, bot's clientID, and serverID (guildID) in the empty quotes.
3. Save the file.
4. You will need to add the specific paths to the two JSON files that are in the **json** folder to **meme.js**, **quote.js**, **addquote.js** and **addmeme.js**, Where specifically in the file the path needs to be added is annotated inside the file. The javascript files can be found inside the **commands** folder.
5. Save the file(s).
</p>

<h2>Installation</h2>
<p>To install the dependencies for the bot, run the following command in the directory where bot.js is located:</p>
<code>npm install</code>

<h2>Deploying Commands</h2>
<p>To deploy the bot's commands, run the following command in the same directory:</p>
<code>node deploy-commands.js</code>

<h2>Running the Bot</h2>
<p>To run the bot, run the following command in the same directory:</p>
<code>node bot.js</code>

<h2>Pre-Populating JSON Files</h2>
<p>You may pre-populate the memesList.json and quoteList.json files if you wish. However, putting non-URLs into memesList.json manually may break it.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
