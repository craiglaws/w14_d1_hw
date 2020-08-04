import React from 'react';

const ChartList = (props) => {

  const songsMap = props.songs.map((song, index) => {
    return (
      <div key={index} className="chartItem">
        <div className="title">
          <p> {index + 1} </p>
          <p className="bold">{song["im:artist"].label} </p>
          <p> - </p>
          <p>{song["im:name"].label} </p>
        </div>
        <div className="audio-button">
          <audio controls>
            <source src={song.link[1].attributes.href}/>
          </audio>
        </div>
      </div>
    )
  })

  return(

    <div>
      {songsMap}
    </div>
  )
}

export default ChartList;
