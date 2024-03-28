import { CoreApplication } from './core/core.js';
import { MemoryAdapter } from './outbound/memory.js';
import { HttpCallAdapter } from './outbound/http.js';
import { CliAdapter } from './inbound/cli.js';
import { HttpAdapter } from './inbound/http.js';

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
