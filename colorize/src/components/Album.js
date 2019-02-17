import React from 'react'

export const Album = (props) => {
  return <div className={"album-content"}>
    {props.resource.map((album, i) => {
      return <picture key={i}>
        <h4>Title</h4>
        <p>{album.title}</p>
        <img src={album.url} alt={`album: ${album.id}`} width={"auto"} />
      </picture>;
    })}
  </div>
};
