import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2 className="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            key={song.id}
            songs={songs}
            id={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
