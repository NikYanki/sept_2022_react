import React from 'react';

const LouncheComponent = ({lounche}) => {
   const {details,flight_number,rocket:{rocket_name}}= lounche

    return (
        <div>
<ul>
    <li>{rocket_name}</li>
    <li>{details}</li>
    <li>{flight_number}</li>
</ul>
            <hr/>
        </div>
    );
};

export {LouncheComponent};
