import React from 'react';

import {Simpsons} from '../../configs'
import {SimpsonComponent} from '../'

const SimpsonsComponent = () => {
    return (
        <div className='containerS'>
            {
                Simpsons.map(simpson=>(<SimpsonComponent key={simpson.id} simpson={simpson}/>))
            }
        </div>
    );
};

export {SimpsonsComponent};
