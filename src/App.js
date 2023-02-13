import {useReducer, useRef} from "react";

import {CatsComponent} from "./components";
import {DogsComponent} from "./components";

const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_CAT':
            const [last] = state.cats.slice(-1);
            const id = last ? last.id + 1 : 0;
            return {...state, cats: [...state.cats, {id, name: action.payload}]}

        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
            return {...state}

        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: idDog, name: action.payload}]}

        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}

        default:
            return {...state}
    }

}
const App = () => {
    const catInp = useRef();
    const dogInp = useRef();
    const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=>data);

    const createCat = () => {
        dispatch({type:'ADD_CAT', payload:catInp.current.value})
        catInp.current.value = ''
    };

    const createDog = () => {
        dispatch({type:'ADD_DOG', payload:dogInp.current.value})
        dogInp.current.value = ''
    };

    return (
        <div>
            <div>
                <input type="text" ref={catInp}/>
                <button onClick={createCat}>createCat</button>
                <CatsComponent cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <input type="text" ref={dogInp}/>
                <button onClick={createDog}>createDog</button>
                <DogsComponent dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {App};
