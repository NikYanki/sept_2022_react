import React, {useEffect, useState} from 'react';

import {LaunchesService} from "../../services";
import {LouncheComponent} from "../../components";

const LounchesComponent = () => {
    const [lounches, setLounches] = useState([])
    useEffect(() => {
        LaunchesService.then(({data}) => setLounches(data))
    }, [])

    return (
        <div>
            {lounches && lounches.filter(lItem => lItem.launch_year !== '2020').map(item => <LouncheComponent key={item.flight_number} lounche={item}/>)}
        </div>
    );
};

export {LounchesComponent};
