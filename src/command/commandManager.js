import { pingCommand } from './pingCommand.js';
import { replyCommand } from './replyCommand.js';
import { repeatCommand } from './repeatCommand.js';
import { aboutCommand } from './aboutCommand.js';

export const traditionalCommands = [
  {
    commandNames: '+about',
    handler: aboutCommand,
  },
];

export const msgCommands = [
  {
    commandNames: 'reply',
    handler: replyCommand,
  },
];

export const slashCommands = [
  {
    commandNames: 'ping',
    handler: pingCommand,
  },
  {
    commandNames: 'repeat',
    handler: repeatCommand,
  },
];
