import express from 'express';

export class HttpAdapter {
  constructor(core) {
    this.core = core;
  }

  async start() {
    const app = express();
    const port = 3000;
    
    app.get('/greet', async (req, res) => {
      const { name } = req.query;
      const response = await this.core.greet(name);
      res.send({ response });
    });
    
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  }
};