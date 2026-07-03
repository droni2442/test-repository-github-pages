import React from 'react';
import { TChuckNorrisJoke } from '../../data/types';

type TJokeListProps = {
    list: Array<TChuckNorrisJoke>;
};

function JokeList({ list }: TJokeListProps) {
    return (
        <ul>
            {list.map((joke) => (
                <li key={joke.id}>
                    <article>
                        <p>{joke.value}</p>
                    </article>
                </li>
            ))}
        </ul>
    );
}
export default JokeList;
