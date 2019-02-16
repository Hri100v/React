import React from 'react'
// import Todo from './Todo'

export const AlbumsList = ({ albums }) => (
  <ul>
    {albums.map(album => (
      <li key={album.id}>
        <img src={album.thumbnailUrl} alt={""} />
        <p>{album.title}</p>
      </li>
    ))}
  </ul>
)

export const CONSTRES = {
    a: 'foo',
    b: 'bar'
}

// export default AlbumsList