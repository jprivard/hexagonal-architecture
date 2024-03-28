export class CoreApplication {
  constructor(repository) {
    this.repository = repository;
  }

  async greet(name) {
    const string = await this.repository.get();
    return string.replace('%name%', name);
  }
}