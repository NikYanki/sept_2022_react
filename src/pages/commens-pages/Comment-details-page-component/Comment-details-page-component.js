import React from 'react';
import {Outlet} from "react-router-dom";

import {CommentDetailsComponent} from "../../../components";

const CommentDetailsPageComponent = () => {

    return (
        <div>
            <CommentDetailsComponent/>
            <Outlet/>
        </div>
    );
};

export {CommentDetailsPageComponent}
