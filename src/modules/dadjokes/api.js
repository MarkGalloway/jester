// https://icanhazdadjoke.com/api

const BASE_URL = 'https://icanhazdadjoke.com/';

const HEADERS = {
  Accept: 'application/json',
  'User-Agent':
    'React Native Demo Joke App (https://github.com/MarkGalloway/jester)',
};

export default class DadJokeApi {
  static getRandomJoke() {
    return fetch(BASE_URL, {
      method: 'GET',
      headers: HEADERS,
    }).then(response => response.json());
  }
}
