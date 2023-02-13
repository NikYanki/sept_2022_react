import {CatComponent} from "../";

const CatsComponent = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(cat=><CatComponent key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {CatsComponent};
