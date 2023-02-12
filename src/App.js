import React from 'react';
import {Component} from "react";

import {PostsComponent, UsersComponent} from "./conponents";

class App extends Component{

    render() {
        return(
            <div>
               <UsersComponent/>
                <PostsComponent/>
            </div>
        )
    }
}

export {App};
