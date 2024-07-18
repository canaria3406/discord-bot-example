export async function pingCommand(interaction) {
  try {
    await interaction.reply({ content: 'Pong!' });
  } catch (error) {
    console.error(error);
  }
}
