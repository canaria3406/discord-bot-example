import { configManager } from './configManager.js';
import { ContextMenuCommandBuilder, SlashCommandBuilder, ApplicationCommandType, REST, Routes } from 'discord.js';

export async function refreshContextMenus() {
  const commandData = [
    new ContextMenuCommandBuilder()
        .setName('reply')
        .setNameLocalizations({
          'zh-TW': '回覆',
          'ja': 'メッセージ回覆',
        })
        .setType(ApplicationCommandType.Message),
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .setNameLocalizations({
          'zh-TW': 'ping',
          'ja': 'ping',
        }),
    new SlashCommandBuilder()
        .setName('repeat')
        .setDescription('Repeat your message!')
        .addStringOption((option) =>
          option
              .setName('content')
              .setDescription('The content to repeat')
              .setRequired(true),
        )
        .setNameLocalizations({
          'zh-TW': '重複',
          'ja': '繰り返し',
        }),
  ];

  const config = await configManager();
  const rest = new REST({ version: '9' }).setToken(config.DISCORD_BOT_TOKEN);
  try {
    await rest.put(
        Routes.applicationCommands(config.DISCORD_BOT_ID),
        { body: commandData },
    );
    console.log('Successfully reloaded Context Menus.');
  } catch {
    console.log('Failed to reload Context Menus.');
  }
}
