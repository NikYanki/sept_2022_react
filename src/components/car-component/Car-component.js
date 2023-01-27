import React from 'react';

const CarComponent = ({value}) => {
    const {id, brand, price, year} = value
    return (
        <div>
            <h3>Car# :{id}</h3>
<ul>
    <li>brand: {brand}</li>
    <li>price: {price}</li>
    <li>year: {year}</li>
</ul>
        </div>
    );
};

export {CarComponent};
