import { CoreApplication } from './core/core.js';
import { MemoryAdapter } from './outgoing/memory.js';
import { HttpCallAdapter } from './outgoing/http.js';
import { CliAdapter } from './incoming/cli.js';
import { HttpAdapter } from './incoming/http.js';

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;

let outgoing, app;
switch (argv.out) {
  case 'http':
    outgoing = new HttpCallAdapter();
    break;
  case 'memory':
  default:
    outgoing = new MemoryAdapter();
}
switch (argv.in) {
  case 'http':
    app = new HttpAdapter(new CoreApplication(outgoing));    
    break;
  case 'cli':
  default:
    app = new CliAdapter(new CoreApplication(outgoing));
}

app.start();
