import React from 'react';

import {RickMorty} from '../../configs'
import {CharacterComponent} from '../'

const CharactersComponent = () => {
    return (
        <div className='containerRM'>
            {
                RickMorty.map(character=>(<CharacterComponent key ={character.id} character={character}/>))
            }
        </div>
    );
};

export {CharactersComponent};
