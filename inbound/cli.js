import inquirer from 'inquirer';

export class CliAdapter {
  constructor(core) {
    this.core = core;
  }

  async start() {
    const answer = await inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }]);
    this.core.greet(answer.name).then((value) => console.log(value));
  }
}

