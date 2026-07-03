import React, { useEffect, useState } from 'react';
import JokeList from '../components/jokeList/JokeList';
import Api from '../api/Api';
import { TChuckNorrisJoke } from '../data/types';

function JokePage(): React.ReactNode {
    const [jokesList, setJokesList] = useState<TChuckNorrisJoke[]>([]);

    useEffect(() => {
        Api.getRandomJokesList(5).then((jokes) => {
            setJokesList(jokes);
        });
    }, []);

    return (
        <section>
            <div>
                <JokeList list={jokesList} />
            </div>
        </section>
    );
}

export default JokePage;
