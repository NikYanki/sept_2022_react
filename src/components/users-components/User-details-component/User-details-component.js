import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {UserService} from "../../../services";

const UserDetailsComponent = () => {

    const {id} = useParams()
    const [userDetails, setUserDetails]= useState(null)

    useEffect(()=>{
        UserService.getUserById(id).then(({data})=>setUserDetails(data))
    },[id])

    return <div>
            {userDetails&& <p>{JSON.stringify(userDetails)}</p>}
        </div>
};

export {UserDetailsComponent}
