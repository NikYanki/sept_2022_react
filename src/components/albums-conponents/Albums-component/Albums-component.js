import React, {useState} from 'react';

import {AlbumsService} from "../../../services";
import {AlbumComponent} from "../Album-component/Album-component";

const AlbumsComponent = () => {

    const [albums, setAlbums] = useState([])

    const getAlbums = async () => {
        const {data} = await AlbumsService.getAllAlbums()
        setAlbums([...data])
    }

    return (
        <div>
            <button onClick={getAlbums}>{albums.length ? 'update' : 'get albums'}</button>
            {albums && albums.map(album => <AlbumComponent key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsComponent}
