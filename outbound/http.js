import axios from 'axios';

export class HttpCallAdapter {
  async get() {
    const response = await axios.get(`https://gist.githubusercontent.com/jprivard/1f7a14adfa1acaacb2e8375ab0f98d32/raw/2958dd67655c82775938a7dae67c1aa7128f9e48/sample.json`);
    return response.data.string;
  }
}