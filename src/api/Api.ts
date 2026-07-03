import { TChuckNorrisJoke } from '../data/types';

class Api {
    BASE_URL = 'https://api.chucknorris.io/';

    getRandomJoke(): Promise<TChuckNorrisJoke> | undefined {
        try {
            return fetch(`${this.BASE_URL}jokes/random`).then((response) => {
                if (!response.ok) {
                    throw new Error('Network response');
                }
                return response.json();
            });
        } catch (err) {
            console.log('Error' + err);
        }
    }

    getRandomJokesList(count: number = 10): Promise<Array<TChuckNorrisJoke>> {
        const requests = Array.from({ length: count }, () => {
            return fetch(`${this.BASE_URL}jokes/random`).then((response) => {
                if (!response.ok) {
                    throw new Error('Network response');
                }
                return response.json();
            });
        });

        return Promise.all(requests).catch((err) => {
            throw err;
        });
    }
}

export default new Api();
