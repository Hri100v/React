import React from 'react'

export const AlbumsList = (props) => {
  return <div className={"albums-list"}>
    {props.resource.map((album, i) => {
      return <picture key={i}>
        <img src={album.thumbnailUrl} alt={`album: ${album.albumId}`} width={"auto"} />
        <p>Album #{album.albumId}: <span>{(album.title).slice(0, 5)}</span></p>
      </picture>;
    })}
  </div>
};
