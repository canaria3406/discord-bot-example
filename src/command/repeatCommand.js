export async function repeatCommand(interaction) {
  try {
    await interaction.deferReply();
    await interaction.deleteReply();
    const content = interaction.options.getString('content');
    await interaction.channel.send(content);
  } catch (error) {
    console.error(error);
  }
}
