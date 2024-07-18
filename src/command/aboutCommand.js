export async function aboutCommand(message) {
  try {
    await message.channel.send('This is a simple bot for Discord.');
  } catch (error) {
    console.error(error);
  }
}
