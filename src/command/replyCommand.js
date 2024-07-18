export async function replyCommand(interaction) {
  try {
    await interaction.reply( { content: 'reply ok!' });
  } catch (error) {
    console.error(error);
  }
}
