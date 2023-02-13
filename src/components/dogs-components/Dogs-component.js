import {DogComponent} from "../";

const DogsComponent = ({dogs,dispatch}) => {
    return (
        <div>
            {dogs.map(dog=><DogComponent key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {DogsComponent};
