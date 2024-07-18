import dotenv from 'dotenv';

export async function configManager() {
  dotenv.config();
  const config = {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_BOT_ID: process.env.DISCORD_BOT_ID,
  };
  return config;
}
