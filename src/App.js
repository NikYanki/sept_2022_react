import React from 'react';

import {SimpsonsComponent,CharactersComponent} from './components'

const App = () => {
    return (
        <div className='main'>
            <h1>The Simpsons</h1>
            <SimpsonsComponent/>
            <h1>Rick & Morty</h1>
            <CharactersComponent/>
        </div>
    );
};

export {App};
