import React from 'react'

export const AlbumsList = (props) => {
  return <div className={"albums-list"}>
    {props.resource.map((album, i) => {
      return <picture key={i}>
        <img src={album.thumbnailUrl} alt={`album: ${album.albumId}`} width={"auto"} />
        <p>{album.title}</p>
      </picture>;
    })}
  </div>
};
