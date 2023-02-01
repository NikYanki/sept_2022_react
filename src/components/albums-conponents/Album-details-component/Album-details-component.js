import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {AlbumsService} from "../../../services";

const AlbumDetailsComponent = () => {

    const {id} = useParams()
    const [albumDetails, setAlbumDetails] = useState(null)

    useEffect(() => {
        AlbumsService.getAlbumById(id).then(({data}) => setAlbumDetails(data))
    }, [id])

    return (
        <div>
            {albumDetails && <p>{JSON.stringify(albumDetails)}</p>}
        </div>
    );
};

export {AlbumDetailsComponent}
